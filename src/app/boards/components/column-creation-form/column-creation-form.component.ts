import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { NbWindowRef } from '@nebular/theme';
import { BoardFacadeService } from 'src/app/redux/board-reducer/board-facade.service';

export interface ColumnCreationFormConfig{
  boardId:string
}

@Component({
  selector: 'app-column-creation-form',
  templateUrl: './column-creation-form.component.html',
  styleUrls: ['./column-creation-form.component.scss']
})
export class ColumnCreationFormComponent implements OnInit {
  context:  ColumnCreationFormConfig = this.windowRef.config.context! as ColumnCreationFormConfig
  columnForm = this.fb.group({
    title: [
      '',
      {
        validators: [Validators.required],
      },
    ],
  });
  constructor(
    private fb: FormBuilder,
    private boardFacade: BoardFacadeService,
    public windowRef: NbWindowRef,
  ) {}

  handleSubmit() {
    if (this.columnForm.valid) {
      console.log('context is ', this.context)
      console.log('form is valid boardID and title', this.context.boardId), this.columnForm.value.title;
        this.boardFacade.initiateColumnCreation(
          {
            title: this.columnForm.value.title
          },
          this.context.boardId,
        );
    }
  }

  getErrorMsg(
    errorObj: ValidationErrors | null,
    errorMsgs: { [kind: string]: string }
  ) {
    return errorObj && errorMsgs
      ? errorMsgs[`${Object.keys(errorObj)[0]}`]
      : '';
  }

  ngOnInit(): void {
  }

}
