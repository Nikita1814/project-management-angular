import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}
  getBoards() {
    return this.http.get<BoardListItem[]>(`${this.apiUrl}boards`);
  }

  createBoard(board: BoardCreationRequest) {
    return this.http.post<BoardListItem>(`${this.apiUrl}boards`, board);
  }

  deleteBoard(boardId: string) {
    return this.http.delete(`${this.apiUrl}boards/${boardId}`);
  }

  getBoard(id: string) {
    return this.http.get<Board>(`${this.apiUrl}boards/${id}`);
  }

  createColumn(boardId: string, column: ColumnCreationRequest) {
    return this.http.post<ColumnResponse>(
      `${this.apiUrl}boards/${boardId}/columns`,
      column
    );
  }

  deleteColumn(boardId: string, columnId: string) {
    return this.http.delete(
      `${this.apiUrl}boards/${boardId}/columns/${columnId}`
    );
  }

  updateColumn(
    boardId: string,
    columnId: string,
    column: ColumnUpdateRequest
  ) {
    return this.http.post(
      `${this.apiUrl}boards/${boardId}/columns/${columnId}`,
      column
    );
  }
  createTask(boardId: string, columnId: string, task: TaskCreationRequest) {
    return this.http.post<TaskResponse>(
      `${this.apiUrl}boards/${boardId}/columns`,
      task
    );
  }

  deleteTask(boardId: string, columnId: string, taskId: string) {
    return this.http.delete(
      `${this.apiUrl}boards/${boardId}/columns/${columnId}/tasks/${taskId}`
    );
  }

  updateTask(
    task: TaskUpdateRequest,
    taskId: string
  ) {
    return this.http.post(
      `${this.apiUrl}boards/${task.boardId}/columns/${task.columnId}/tasks/${taskId}`,
      task
    );
  }
}
