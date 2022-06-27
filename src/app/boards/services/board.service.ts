import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Task {
  id: string,
  title: string,
  order: number,
  description: string,
  userId: string,
}

export interface TaskResponse extends Task {
  boardId: string,
  columnId: string,
}

export interface ColumnResponse {
  id: string,
  title: string,
  order: number,
  tasks: Task[]
}

export interface Board {
  id: string,
  title: string,
  description: string,
  columns: ColumnResponse[]
}

export interface BoardListItem {
    id: string,
    title: string,
    description: string
}

export interface BoardCreationRequest {
  title: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  apiUrl = 'https://gentle-earth-67890.herokuapp.com/';

  constructor(private http: HttpClient) {}
  getBoards( headers: HttpHeaders){
  return this.http.get<BoardListItem[]>(`${this.apiUrl}boards`, {headers: headers})
  }

  createBoard(board: BoardCreationRequest, headers: HttpHeaders) {
    return this.http.post<BoardListItem>(`${this.apiUrl}boards`, board), {headers: headers};
  }

  deleteBoard(boardId: string, headers: HttpHeaders){
    return this.http.delete(`${this.apiUrl}boards/${boardId}`, {headers: headers})
 }
}
