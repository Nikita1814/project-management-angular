import { Component, OnInit } from '@angular/core';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  langRu=false
  loggedIn=false
  constructor( public authFacade: AuthFacadeService) {

  }

  ngOnInit(): void {
  }

}
