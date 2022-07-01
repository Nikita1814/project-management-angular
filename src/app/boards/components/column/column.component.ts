import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { BoardFacadeService } from 'src/app/redux/board-reducer/board-facade.service';
import { DialogueModalComponent } from 'src/app/shared/components/dialogue-modal/dialogue-modal.component';
import { ColumnResponse, Task } from '../../services/board.service';
import { TaskCreationFormComponent } from '../task-creation-form/task-creation-form.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {
  @Input() column!: ColumnResponse;
  @Input() boardId!: string;
  constructor(
    private _dialogService: NbDialogService,
    private _boardFacade: BoardFacadeService,
    private _windowService: NbWindowService,
  ) {}
  taskById(index: number, task: Task) {
    return task.id;
  }

  openDeletionModal() {
    this._dialogService.open(DialogueModalComponent, {
      context: {
        title: `Are you sure you want to delete the ${this.column.title} column?`,
        message: '',
        DeclineActionFunction: () => {
          return;
        },
        AcceptActionFunction: () =>
          this._boardFacade.initiateColumnDeletion(
            this.boardId,
            this.column.id,
          ),
      },
    });
  }

  openCreationForm() {
    this._windowService.open(TaskCreationFormComponent, {
      buttons: {
        minimize: true,
        maximize: true,
        fullScreen: true,
        close: true,
      },
      context: {
        boardId: this.boardId,
        columnId: this.column.id,
        type: 'create',
      },
    });
  }
}
