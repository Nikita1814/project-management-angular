import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { BoardListFacadeService } from 'src/app/redux/board-list-reducer/board-list-facade.service';
import { DialogueModalComponent } from 'src/app/shared/components/dialogue-modal/dialogue-modal.component';
import { BoardListItem } from '../../services/board.service';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardCardComponent {
  @Input() boardItem!: BoardListItem;
  constructor(
    private _dialogService: NbDialogService,
    private _boardListFacade: BoardListFacadeService,
  ) {}

  openDeleteModal() {
    this._dialogService.open(DialogueModalComponent, {
      context: {
        title: 'Are you sure you want to delete the card?',
        message: '',
        DeclineActionFunction: () => {
          return;
        },
        AcceptActionFunction: () =>
          this._boardListFacade.deleteBoard(this.boardItem.id),
      },
    });
  }
}
