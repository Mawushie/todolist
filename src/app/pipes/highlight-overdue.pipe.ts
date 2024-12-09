import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/Task.model';

@Pipe({
  name: 'overdue',
  standalone: true,
})
export class HighlightOverduePipe implements PipeTransform {
  transform(task: Task): unknown {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let dueDate = new Date(task.due);
    dueDate.setHours(0, 0, 0, 0);
    // console.log(today, dueDate);
    return today > dueDate ? 'overdue' : ''; //this will return overdue if task is overdue
  }
}
