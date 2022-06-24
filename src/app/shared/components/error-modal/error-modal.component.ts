import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit {
  @Input() title!: string;
  @Input() message!: string;
  @Input() closingActionFunction!: () => void
  constructor( protected ref: NbDialogRef<ErrorModalComponent>) {

   }

   dismiss() {
    this.ref.close();
    this.closingActionFunction()
  }
  ngOnInit(): void {
  }

}
