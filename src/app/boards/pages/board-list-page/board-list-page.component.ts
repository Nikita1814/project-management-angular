import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { BoardListFacadeService } from 'src/app/redux/board-list-reducer/board-list-facade.service';
import { BoardCreationFormComponent } from '../../components/board-creation-form/board-creation-form.component';
import { BoardListItem } from '../../services/board.service';

@Component({
  selector: 'app-board-list-page',
  templateUrl: './board-list-page.component.html',
  styleUrls: ['./board-list-page.component.scss']
})
export class BoardListPageComponent implements OnInit {

  constructor(public boardListFacade:BoardListFacadeService, private windowService: NbWindowService) { }
  boardById(index: number, board: BoardListItem) {
    return board.id;
  }
  ngOnInit(): void {
    this.boardListFacade.requestBoardList()
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
