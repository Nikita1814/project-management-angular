import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { BoardListFacadeService } from 'src/app/redux/board-list-reducer/board-list-facade.service';
import { DialogueModalComponent } from 'src/app/shared/components/dialogue-modal/dialogue-modal.component';
import { BoardListItem, BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnInit {
@Input() boardItem!:BoardListItem
  constructor( private dialogService: NbDialogService, private boardListFacade: BoardListFacadeService) { }


  openDeleteModal (){
    this.dialogService.open(DialogueModalComponent, {
      context: {
        title: 'Are you sure you want to delete the card?',
        message: ``,
        DeclineActionFunction: () => {return},
        AcceptActionFunction: () => this.boardListFacade.deleteBoard(this.boardItem.id)

      }});

  }
  ngOnInit(): void {
  }

}
