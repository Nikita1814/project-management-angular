import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardListPageComponent } from './pages/board-list-page/board-list-page.component';
import { BoardPageComponent } from './pages/board-page/board-page.component';

const routes: Routes = [
  { path: '', component: BoardListPageComponent },
  { path: 'board/:id', component: BoardPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardsRoutingModule {}
