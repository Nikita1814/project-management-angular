import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ProfileEditPageComponent } from './pages/profile-edit-page/profile-edit-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';
import { AccountManagementPageComponent } from './pages/account-management-page/account-management-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SignInPageComponent,
    SignUpPageComponent,
    ProfileEditPageComponent,
    AccountManagementPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbFormFieldModule,
    NbButtonModule,
    NbIconModule,
    NbLayoutModule,
    SharedModule,
    HttpClientModule,
    NbDialogModule.forChild(),
  ]
})
export class AuthModule { }
