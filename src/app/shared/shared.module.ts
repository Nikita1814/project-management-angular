import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLoggerComponent } from './components/error-logger/error-logger.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { NbButtonModule, NbCardModule, NbDialogModule } from '@nebular/theme';
import { DialogueModalComponent } from './components/dialogue-modal/dialogue-modal.component';



@NgModule({
  declarations: [
    ErrorLoggerComponent,
    ErrorModalComponent,
    DialogueModalComponent
  ],
  imports: [
    CommonModule,
    NbDialogModule.forChild(),
    NbButtonModule,
    NbCardModule
  ],
  exports:[
    ErrorLoggerComponent,
    ErrorModalComponent,
    DialogueModalComponent
  ]
})
export class SharedModule { }
