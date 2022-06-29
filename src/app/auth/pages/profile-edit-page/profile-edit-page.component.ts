import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';
import { User } from 'src/app/redux/types';

@Component({
  selector: 'app-profile-edit-page',
  templateUrl: './profile-edit-page.component.html',
  styleUrls: ['./profile-edit-page.component.scss'],
})
export class ProfileEditPageComponent implements OnInit {
  user: User = {} as User;
  editForm = this.fb.group({
    name: [
      { value: this.user.name },
      {
        validators: [Validators.required],
      },
    ],
    login: [
      { value: this.user.login },
      {
        validators: [
          Validators.required,
          Validators.pattern(/[A-Za-z0-9!@#?]/),
        ]
      },
    ],
    password: [
      { value: this.user.password },
      {
        validators: [Validators.required],
      },
    ],
  });

  constructor(private fb: FormBuilder, public authFacade: AuthFacadeService) {}

  handleEdit() {
    if (this.editForm.valid) {
      console.log('submitting the form');

      this.authFacade.initiateEdit({
        id: this.user.id,
        name: this.editForm.value.name,
        login: this.editForm.value.login,
        password: this.editForm.value.password,
      } as User);
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
    this.authFacade.user$.subscribe((user: User) => {
      console.log('user is ', user);
      this.user = user;
    });
  }
}
