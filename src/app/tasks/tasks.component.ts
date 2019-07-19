import {Component, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
  }

  addTask() {
  }

  changeStatus(id: number) {
  }

  deleteTask(id: number) {
  }

  editTask(id: number, text: string) {
  }

}
