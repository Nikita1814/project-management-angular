import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { BoardFacadeService } from 'src/app/redux/board-reducer/board-facade.service';
import { DialogueModalComponent } from 'src/app/shared/components/dialogue-modal/dialogue-modal.component';
import { Task } from '../../services/board.service';
import { TaskCreationFormComponent } from '../task-creation-form/task-creation-form.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() task!: Task;
  @Input() columnId!: string;
  @Input() boardId!: string;
  constructor(
    private _dialogService: NbDialogService,
    private _windowService: NbWindowService,
    private _boardFacade: BoardFacadeService,
  ) {}

  openDeletionModal() {
    this._dialogService.open(DialogueModalComponent, {
      context: {
        title: `Are you sure you want to delete the ${this.task.title} task?`,
        message: '',
        DeclineActionFunction: () => {
          return;
        },
        AcceptActionFunction: () =>
          this._boardFacade.initiateTaskDeletion(
            this.boardId,
            this.columnId,
            this.task.id,
          ),
      },
    });
  }

  openUpdateForm() {
    this._windowService.open(TaskCreationFormComponent, {
      buttons: {
        minimize: true,
        maximize: true,
        fullScreen: true,
        close: true,
      },
      context: {
        task: this.task,
        boardId: this.boardId,
        columnId: this.columnId,
        type: 'update',
      },
    });
  }
}
