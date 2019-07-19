import {Component, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  textTask;
  newTask;
  filterText;

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.tasksService.getTasks();
  }

  addTask() {
    this.tasksService.addTask(this.newTask);
    this.newTask = '';
  }

  changeDoneStatus(id: number) {
    this.tasksService.changeDoneStatus(id);
  }

  changeEditStatus(id: number, text: string) {
    this.tasksService.changeEditStatus(id);
    this.textTask = text;
  }

  deleteTask(id: number) {
    this.tasksService.deleteTask(id);
  }

  editTask(id: number, text: string) {
    this.tasksService.editTask(id, text);
  }

}
