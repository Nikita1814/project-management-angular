//Work in Progrress

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';
import { User } from 'src/app/redux/types';

@Component({
  selector: 'app-profile-edit-page',
  templateUrl: './profile-edit-page.component.html',
  styleUrls: ['./profile-edit-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditPageComponent implements OnInit {
  user: User = {} as User;
  editForm = this._fb.group({
    name: [
      this.user.name,
      {
        validators: [Validators.required],
      },
    ],
    login: [
      this.user.login,
      {
        validators: [
          Validators.required,
          Validators.pattern(/[A-Za-z0-9!@#?]/),
        ],
      },
    ],
    password: [
      this.user.password,
      {
        validators: [Validators.required],
      },
    ],
  });

  constructor(
    private _fb: FormBuilder,
    public _authFacade: AuthFacadeService,
  ) {}

  handleEdit() {
    if (this.editForm.valid) {
      console.log('submitting the form');

      this._authFacade.initiateEdit({
        userId: this.user.userId,
        name: this.editForm.value.name,
        login: this.editForm.value.login,
        password: this.editForm.value.password,
      } as User);
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

  ngOnInit(): void {
    this._authFacade.user$.subscribe((user: User) => {
      console.log('user is ', user);
      this.user = user;
      console.log(this.user);
    });
  }
}
