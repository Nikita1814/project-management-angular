import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { BoardFacadeService } from 'src/app/redux/board-reducer/board-facade.service';
import { DialogueModalComponent } from 'src/app/shared/components/dialogue-modal/dialogue-modal.component';
import { ColumnResponse, Task } from '../../services/board.service';
import { TaskCreationFormComponent } from '../task-creation-form/task-creation-form.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  @Input() column!: ColumnResponse;
  @Input() boardId!: string;
  constructor(
    private dialogService: NbDialogService,
    private boardFacade: BoardFacadeService,
    private windowService: NbWindowService
  ) {}
  taskById(index: number, task: Task) {
    return task.id;
  }
  ngOnInit(): void {}

  openDeletionModal() {
    this.dialogService.open(DialogueModalComponent, {
      context: {
        title: `Are you sure you want to delete the ${this.column.title} column?`,
        message: ``,
        DeclineActionFunction: () => {
          return;
        },
        AcceptActionFunction: () =>
          this.boardFacade.initiateColumnDeletion(this.boardId, this.column.id),
      },
    });
  }

  openCreationForm() {
    this.windowService.open(TaskCreationFormComponent, {
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
