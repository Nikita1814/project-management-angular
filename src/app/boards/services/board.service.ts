import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
}

export interface TaskResponse extends Task {
  boardId: string;
  columnId: string;
}

export interface ColumnResponse {
  id: string;
  title: string;
  order: number;
  tasks: Task[];
}

export interface Board {
  id: string;
  title: string;
  description: string;
  columns: ColumnResponse[];
}

export interface BoardListItem {
  id: string;
  title: string;
  description: string;
}

export interface BoardCreationRequest {
  title: string;
  description: string;
}

export interface ColumnCreationRequest {
  title: string;
}
export interface ColumnUpdateRequest {
  title: string;
  order: number;
}
export interface TaskCreationRequest {
  title: string;
  description: string;
  userId: string;
}
export interface TaskUpdateRequest {
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
}
@Injectable({
  providedIn: 'root',
})
export class BoardService {
  apiUrl = 'https://gentle-earth-67890.herokuapp.com/';

  constructor(private _http: HttpClient) {}
  getBoards() {
    return this._http.get<BoardListItem[]>(`${this.apiUrl}boards`);
  }

  createBoard(board: BoardCreationRequest) {
    return this._http.post<BoardListItem>(`${this.apiUrl}boards`, board);
  }

  deleteBoard(boardId: string) {
    return this._http.delete(`${this.apiUrl}boards/${boardId}`);
  }

  getBoard(id: string) {
    return this._http.get<Board>(`${this.apiUrl}boards/${id}`);
  }

  createColumn(boardId: string, column: ColumnCreationRequest) {
    return this._http.post<ColumnResponse>(
      `${this.apiUrl}boards/${boardId}/columns`,
      column,
    );
  }

  deleteColumn(boardId: string, columnId: string) {
    return this._http.delete(
      `${this.apiUrl}boards/${boardId}/columns/${columnId}`,
    );
  }

  updateColumn(boardId: string, columnId: string, column: ColumnUpdateRequest) {
    return this._http.post(
      `${this.apiUrl}boards/${boardId}/columns/${columnId}`,
      column,
    );
  }
  createTask(boardId: string, columnId: string, task: TaskCreationRequest) {
    return this._http.post<TaskResponse>(
      `${this.apiUrl}boards/${boardId}/columns/${columnId}/tasks`,
      task,
    );
  }

  deleteTask(boardId: string, columnId: string, taskId: string) {
    return this._http.delete(
      `${this.apiUrl}boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
    );
  }

  updateTask(task: TaskUpdateRequest, taskId: string) {
    return this._http.put(
      `${this.apiUrl}boards/${task.boardId}/columns/${task.columnId}/tasks/${taskId}`,
      task,
    );
  }
}
