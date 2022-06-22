import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLoggerComponent } from './components/error-logger/error-logger.component';



@NgModule({
  declarations: [
    ErrorLoggerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrorLoggerComponent
  ]
})
export class SharedModule { }
