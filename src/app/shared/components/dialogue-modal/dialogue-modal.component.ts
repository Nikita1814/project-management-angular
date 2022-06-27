import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-dialogue-modal',
  templateUrl: './dialogue-modal.component.html',
  styleUrls: ['./dialogue-modal.component.scss']
})
export class DialogueModalComponent implements OnInit {
  @Input() title!: string;
  @Input() message!: string;
  @Input() AcceptActionFunction!: () => void
  @Input() DeclineActionFunction!: () => void
  constructor( protected ref: NbDialogRef<DialogueModalComponent>) { }

  dismiss() {
    this.ref.close();
  }
  accept(){
    this.ref.close()
    this.AcceptActionFunction()
  }
  ngOnInit(): void {
  }

}
