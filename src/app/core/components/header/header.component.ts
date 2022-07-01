import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  langRu = false;
  loggedIn = false;
  constructor(public _authFacade: AuthFacadeService) {}
}
