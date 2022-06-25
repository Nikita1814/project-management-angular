import { Component, Input, OnInit } from '@angular/core';
import { BoardListItem } from '../../services/board.service';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnInit {
@Input() boardItem!:BoardListItem
  constructor() { }

  ngOnInit(): void {
  }

}
