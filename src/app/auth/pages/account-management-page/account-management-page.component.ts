import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';

@Component({
  selector: 'app-account-management-page',
  templateUrl: './account-management-page.component.html',
  styleUrls: ['./account-management-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountManagementPageComponent {
  constructor(public _authFacade: AuthFacadeService) {}
}
