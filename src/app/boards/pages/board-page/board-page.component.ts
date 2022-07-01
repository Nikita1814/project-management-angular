import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbWindowService } from '@nebular/theme';
import { BoardFacadeService } from 'src/app/redux/board-reducer/board-facade.service';
import { ColumnCreationFormComponent } from '../../components/column-creation-form/column-creation-form.component';
import { ColumnResponse } from '../../services/board.service';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardPageComponent implements OnInit {
  boardId: string = '';
  constructor(
    private _windowService: NbWindowService,
    private _route: ActivatedRoute,
    public _boardFacade: BoardFacadeService,
  ) {}

  ngOnInit(): void {
    this.boardId = this._route.snapshot.params['id'];
    this._boardFacade.requestBoard(this.boardId);
  }

  columnById(index: number, column: ColumnResponse) {
    return column.id;
  }
  openCreationForm() {
    this._windowService.open(ColumnCreationFormComponent, {
      buttons: {
        minimize: true,
        maximize: true,
        fullScreen: true,
        close: true,
      },
      context: {
        boardId: this.boardId,
      },
    });
  }
}
