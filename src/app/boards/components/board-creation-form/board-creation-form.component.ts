import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { BoardListFacadeService } from 'src/app/redux/board-list-reducer/board-list-facade.service';

@Component({
  selector: 'app-board-creation-form',
  templateUrl: './board-creation-form.component.html',
  styleUrls: ['./board-creation-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardCreationFormComponent {
  boardForm = this._fb.group({
    title: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    description: [''],
  });
  constructor(
    private _fb: FormBuilder,
    private _boardListFacade: BoardListFacadeService,
  ) {}

  handleSubmit() {
    if (this.boardForm.valid) {
      this._boardListFacade.initiateBoardCreation({
        title: this.boardForm.value.title,
        description: this.boardForm.value.description,
      });
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
