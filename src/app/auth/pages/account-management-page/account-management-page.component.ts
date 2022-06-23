import { Component, OnInit } from '@angular/core';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';
import { User } from 'src/app/redux/types';

@Component({
  selector: 'app-account-management-page',
  templateUrl: './account-management-page.component.html',
  styleUrls: ['./account-management-page.component.scss']
})
export class AccountManagementPageComponent implements OnInit {
  constructor(public authFacade: AuthFacadeService ) { }

  ngOnInit(): void {
  }

}
