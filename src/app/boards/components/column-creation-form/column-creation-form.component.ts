import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { NbWindowRef } from '@nebular/theme';
import { BoardFacadeService } from 'src/app/redux/board-reducer/board-facade.service';

export interface ColumnCreationFormConfig {
  boardId: string;
}

@Component({
  selector: 'app-column-creation-form',
  templateUrl: './column-creation-form.component.html',
  styleUrls: ['./column-creation-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnCreationFormComponent {
  context: ColumnCreationFormConfig = this._windowRef.config
    .context! as ColumnCreationFormConfig;
  columnForm = this._fb.group({
    title: [
      '',
      {
        validators: [Validators.required],
      },
    ],
  });
  constructor(
    private _fb: FormBuilder,
    private _boardFacade: BoardFacadeService,
    public _windowRef: NbWindowRef,
  ) {}

  handleSubmit() {
    if (this.columnForm.valid) {
      this._boardFacade.initiateColumnCreation(
        {
          title: this.columnForm.value.title,
        },
        this.context.boardId,
      );
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
