import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorModalComponent {
  @Input() title!: string;
  @Input() message!: string;
  @Input() closingActionFunction!: () => void;
  constructor(protected _ref: NbDialogRef<ErrorModalComponent>) {}

  dismiss() {
    this._ref.close();
    this.closingActionFunction();
  }
}
