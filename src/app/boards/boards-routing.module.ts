import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardListPageComponent } from './pages/board-list-page/board-list-page.component';

const routes: Routes = [
{path: '', component:BoardListPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
