import { HttpErrorResponse } from "@angular/common/http"
import { BoardListItem, Board } from "../boards/services/board.service"

export interface User {
  id: string
  name:string,
  login:string,
  password?:string,
  token?: string,
}

export interface AuthState{
  user: User,
  authError: HttpErrorResponse | null
}

export interface BoardListState{
  boardList: BoardListItem[],
  boardListError: HttpErrorResponse | null
}

export interface BoardState{
  board: Board | null,
  boardError: HttpErrorResponse | null
}
