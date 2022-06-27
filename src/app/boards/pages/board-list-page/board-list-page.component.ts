import { Component, OnInit } from '@angular/core';
import { BoardListFacadeService } from 'src/app/redux/board-list-reducer/board-list-facade.service';
import { BoardListItem } from '../../services/board.service';

@Component({
  selector: 'app-board-list-page',
  templateUrl: './board-list-page.component.html',
  styleUrls: ['./board-list-page.component.scss']
})
export class BoardListPageComponent implements OnInit {

  constructor(public boardListFacade:BoardListFacadeService) { }
  boardById(index: number, board: BoardListItem) {
    return board.id;
  }
  ngOnInit(): void {
    this.boardListFacade.requestBoardList()
  }

}
