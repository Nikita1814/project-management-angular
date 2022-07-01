import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPageComponent {
  signInForm = this._fb.group({
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

  handleSignIn() {
    if (this.signInForm.valid) {
      console.log('submitting the form with', {
        login: this.signInForm.value.login,
        password: this.signInForm.value.password,
      });

      this._authFacade.initiateSignIn({
        login: this.signInForm.value.login,
        password: this.signInForm.value.password,
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
