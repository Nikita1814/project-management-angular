import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { BoardFacadeService } from 'src/app/redux/board-reducer/board-facade.service';
import { DialogueModalComponent } from 'src/app/shared/components/dialogue-modal/dialogue-modal.component';
import { Task } from '../../services/board.service';
import { TaskCreationFormComponent } from '../task-creation-form/task-creation-form.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() columnId!: string;
  @Input() boardId!: string;
  constructor(
    private dialogService: NbDialogService,
    private windowService: NbWindowService,
    private boardFacade: BoardFacadeService
  ) {}

  ngOnInit(): void {}

  openDeleteModal() {
    this.dialogService.open(DialogueModalComponent, {
      context: {
        title: 'Are you sure you want to delete the task?',
        message: ``,
        DeclineActionFunction: () => {
          return;
        },
        AcceptActionFunction: () =>
          this.boardFacade.initiateTaskDeletion(
            this.boardId,
            this.columnId,
            this.task.id
          ),
      },
    });
  }

  openUpdateForm() {
    this.windowService.open(TaskCreationFormComponent, {
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
