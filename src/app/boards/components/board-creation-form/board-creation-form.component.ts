import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { BoardListFacadeService } from 'src/app/redux/board-list-reducer/board-list-facade.service';

@Component({
  selector: 'app-board-creation-form',
  templateUrl: './board-creation-form.component.html',
  styleUrls: ['./board-creation-form.component.scss']
})
export class BoardCreationFormComponent implements OnInit {

  boardForm = this.fb.group({
    title: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    description: [''],
  });
  constructor(private fb: FormBuilder, private boardListFacade: BoardListFacadeService) {}

  handleSignUp() {
    if (this.boardForm.valid) {
      console.log('form is valid uploading stuff');
      this.boardListFacade.initiateBoardCreation({
        title: this.boardForm.value.title,
        description: this.boardForm.value.description,
      });
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
