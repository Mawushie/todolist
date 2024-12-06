import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //array of to contain all the pending tasks
  pendingTasks: Task[] = [
    {
      id: '2',
      due: 'Thu Dec 05 2024 14:10:38 GMT+0000 (Greenwich Mean Time)',
      task: 'Meditate',
      isEdited: false,
    },
  ];

  constructor() {}
  //function to get all of the pending Tasks
  //returns an array of Task
  getTasksService(): Task[] {
    return this.pendingTasks;
  }

  //function to add new tasks
  addTaskService(newTask: Task) {
    this.pendingTasks.push(newTask);
    console.log(this.pendingTasks);
  }

  deleteTaskService(id: string) {
    this.pendingTasks = this.pendingTasks.filter((task) => task.id !== id);
    console.log(this.pendingTasks);
    console.log(id);
  }
}
