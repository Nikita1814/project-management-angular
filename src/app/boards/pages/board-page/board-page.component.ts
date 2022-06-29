import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbWindowService } from '@nebular/theme';
import { BoardFacadeService } from 'src/app/redux/board-reducer/board-facade.service';
import { BoardCreationFormComponent } from '../../components/board-creation-form/board-creation-form.component';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  boardId: string = ''
  constructor(private windowService: NbWindowService, private route: ActivatedRoute, public boardFacade: BoardFacadeService) { }

  ngOnInit(): void {
    const boardId = this.route.snapshot.params['id'];
    this.boardFacade.requestBoard(boardId)
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
