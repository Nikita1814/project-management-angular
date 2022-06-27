import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardListPageComponent } from './pages/board-list-page/board-list-page.component';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { ColumnComponent } from './components/column/column.component';
import { TaskComponent } from './components/task/task.component';
import { NbButtonModule, NbCardModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BoardCreationFormComponent } from './components/board-creation-form/board-creation-form.component';
import { BoardsRoutingModule } from './boards-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BoardListPageComponent,
    BoardPageComponent,
    BoardCardComponent,
    ColumnComponent,
    TaskComponent,
    BoardCreationFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BoardsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NbWindowModule.forChild(),
  ]
})
export class BoardsModule { }
