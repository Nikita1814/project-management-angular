import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './core/pages/welcome-page/welcome-page.component';
import { AuthReqGuard } from './guards/auth-req.guard';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'boards',
    loadChildren: () => import('./boards/boards.module').then((m) => m.BoardsModule),
    canActivate:[AuthReqGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
