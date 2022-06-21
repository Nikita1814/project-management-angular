import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardListPageComponent } from './pages/board-list-page/board-list-page.component';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { ColumnComponent } from './components/column/column.component';
import { TaskComponent } from './components/task/task.component';



@NgModule({
  declarations: [
    BoardListPageComponent,
    BoardPageComponent,
    BoardCardComponent,
    ColumnComponent,
    TaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BoardsModule { }
