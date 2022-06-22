import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  langRu=false
  loggedIn=false
  constructor() { }

  ngOnInit(): void {
  }

}
