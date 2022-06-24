import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';
import { User } from 'src/app/redux/types';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  signUpForm = this.fb.group({
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
  constructor(private fb: FormBuilder, private authFacade: AuthFacadeService) {}

  handleSignUp() {
    if (this.signUpForm.valid) {
      console.log('form is valid uploading stuff');
      this.authFacade.initiateSignUp({
        name: this.signUpForm.value.name,
        login: this.signUpForm.value.login,
        password: this.signUpForm.value.password,
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
  ngOnInit(): void {}
}
