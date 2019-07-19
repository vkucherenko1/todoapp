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
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.setToStorage();
  }

  setToStorage() {
    this.tasks.sort((a, b) => {
      return a.task < b.task ? 1 : a.task > b.task ? -1 : 0;
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getLastId() {
    const sorted = this.tasks.sort((a, b) => {
      return b.id - a.id;
    });
    return sorted.length ? sorted[0].id : 0;
  }

  addTask(taskText) {
    const task = {
      id: this.getLastId() + 1,
      task: taskText,
      done: false,
      edit: false
    };
    this.tasks.push(task);
    this.setToStorage();
  }

  changeDoneStatus(id: number) {
    const index = this.tasks.findIndex(tsk => tsk.id === id);
    this.tasks[index].done = !this.tasks[index].done;
    this.setToStorage();
  }

  changeEditStatus(id: number) {
    const index = this.tasks.findIndex(tsk => tsk.id === id);
    this.setToStorage();
    this.tasks[index].edit = true;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(tsk => tsk.id !== id);
    this.setToStorage();
  }

  editTask(id: number, task: string) {
    const index = this.tasks.findIndex(tsk => tsk.id === id);
    this.tasks[index].task = task;
    this.tasks[index].edit = false;
    this.setToStorage();
  }

  filterTasks(text: string) {
    this.tasks = JSON.parse(localStorage.getItem('tasks')).filter(tsk => new RegExp(text, 'im').test(tsk.task));
  }

}
