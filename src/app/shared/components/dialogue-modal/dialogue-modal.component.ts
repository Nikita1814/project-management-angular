import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-dialogue-modal',
  templateUrl: './dialogue-modal.component.html',
  styleUrls: ['./dialogue-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogueModalComponent {
  @Input() title!: string;
  @Input() message!: string;
  @Input() AcceptActionFunction!: () => void;
  @Input() DeclineActionFunction!: () => void;
  constructor(protected _ref: NbDialogRef<DialogueModalComponent>) {}

  dismiss() {
    this._ref.close();
  }
  accept() {
    this._ref.close();
    this.AcceptActionFunction();
  }
}
