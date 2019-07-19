import { Pipe, PipeTransform } from '@angular/core';
import {Tasks} from '../services/tasks.service';

@Pipe({
  name: 'tasksFilter'
})
export class TasksFilterPipe implements PipeTransform {

  transform(tasks: Tasks[], text: string = ''): Tasks[] {
    return !text ? tasks : tasks.filter(tsk => new RegExp(text, 'im').test(tsk.task));
  }

}
