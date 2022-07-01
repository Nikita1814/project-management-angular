import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-welcome-feature-card',
  templateUrl: './welcome-feature-card.component.html',
  styleUrls: ['./welcome-feature-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeFeatureCardComponent {
  constructor() {}
}
