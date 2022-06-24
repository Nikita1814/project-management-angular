import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLoggerComponent } from './components/error-logger/error-logger.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { NbButtonModule, NbCardModule, NbDialogModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ErrorLoggerComponent,
    ErrorModalComponent
  ],
  imports: [
    CommonModule,
    NbDialogModule.forChild(),
    NbButtonModule,
    NbCardModule
  ],
  exports:[
    ErrorLoggerComponent,
    ErrorModalComponent
  ]
})
export class SharedModule { }
