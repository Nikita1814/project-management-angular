import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEditPageComponent } from './pages/profile-edit-page/profile-edit-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AuthReqGuard } from '../guards/auth-req.guard';
import { AccountManagementPageComponent } from './pages/account-management-page/account-management-page.component';

const routes: Routes = [
  { path:'', component: AccountManagementPageComponent},
  { path: 'signIn', component: SignInPageComponent },
  { path: 'signUp', component: SignUpPageComponent },
  {path: 'edit', component: ProfileEditPageComponent, canActivate:[AuthReqGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
