import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { BoardCreationFormComponent } from '../../components/board-creation-form/board-creation-form.component';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {

  constructor(private windowService: NbWindowService) { }

  ngOnInit(): void {
  }


  openCreationForm() {
    this.windowService.open(BoardCreationFormComponent, {
      buttons: {
        minimize: true,
        maximize: true,
        fullScreen: true,
        close: true,
      },
    });
  }
}
