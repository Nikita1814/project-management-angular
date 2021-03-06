import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { NbWindowRef } from '@nebular/theme';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';
import { BoardFacadeService } from 'src/app/redux/board-reducer/board-facade.service';
import { Task } from '../../services/board.service';

export interface CreationFormConfig {
  task?: Task;
  boardId: string;
  columnId: string;
  type: 'create' | 'update';
}

@Component({
  selector: 'app-task-creation-form',
  templateUrl: './task-creation-form.component.html',
  styleUrls: ['./task-creation-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCreationFormComponent {
  context: CreationFormConfig = this._windowRef.config
    .context! as CreationFormConfig;
  title: string =
    this.context.type === 'create' ? '' : this.context.task!.title;
  description: string =
    this.context.type === 'create' ? '' : this.context.task!.description;
  taskForm = this._fb.group({
    title: [
      this.title,
      {
        validators: [Validators.required],
      },
    ],
    description: [this.description],
  });
  constructor(
    private _fb: FormBuilder,
    private _boardFacade: BoardFacadeService,
    public _windowRef: NbWindowRef,
    private _authFacade: AuthFacadeService,
  ) {}

  handleSubmit() {
    if (this.taskForm.valid) {
      if (this.context.type === 'create') {
        this._boardFacade.initiateTaskCreation(
          this.context.boardId,
          this.context.columnId,
          {
            title: this.taskForm.value.title,
            description: this.taskForm.value.description,
            userId: this._authFacade.showUserId(),
          },
        );
      }
      if (this.context.type === 'update') {
        this._boardFacade.initiateTaskUpdate(
          {
            title: this.taskForm.value.title,
            order: this.context.task?.order as number,
            description: this.taskForm.value.description,
            userId: this._authFacade.showUserId(),
            boardId: this.context.boardId,
            columnId: this.context.columnId,
          },
          this.context.task!.id,
        );
      }
    }
  }

  getErrorMsg(
    errorObj: ValidationErrors | null,
    errorMsgs: { [kind: string]: string },
  ) {
    return errorObj && errorMsgs ?
      errorMsgs[`${Object.keys(errorObj)[0]}`] :
      '';
  }
}
