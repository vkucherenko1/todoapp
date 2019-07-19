import {Injectable} from '@angular/core';

export interface Tasks {
  id: number,
  task: string,
  done: boolean,
  edit: boolean
}

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  public tasks: Tasks[] = [];

  constructor() {
  }

  getTasks() {
  }

  setToStorage() {
  }

  addTask(taskText) {
  }

  changeStatus(id: number) {
  }

  deleteTask(id: number) {
  }

  editTask(id: number, task: string) {
  }
}
