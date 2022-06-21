import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ProfileEditPageComponent } from './pages/profile-edit-page/profile-edit-page.component';



@NgModule({
  declarations: [
    SignInPageComponent,
    SignUpPageComponent,
    ProfileEditPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }