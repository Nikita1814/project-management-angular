import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPageComponent {
  signUpForm = this._fb.group({
    name: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    login: [
      '',
      {
        validators: [
          Validators.required,
          Validators.pattern(/[A-Za-z0-9!@#?]/),
        ],
      },
    ],
    password: [
      '',
      {
        validators: [Validators.required],
      },
    ],
  });
  constructor(
    private _fb: FormBuilder,
    private _authFacade: AuthFacadeService,
  ) {}

  handleSignUp() {
    if (this.signUpForm.valid) {
      console.log('form is valid uploading stuff');
      this._authFacade.initiateSignUp({
        name: this.signUpForm.value.name,
        login: this.signUpForm.value.login,
        password: this.signUpForm.value.password,
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
