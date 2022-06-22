import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-logger',
  templateUrl: './error-logger.component.html',
  styleUrls: ['./error-logger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLoggerComponent {
  @Input() error!: string;
}
