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
  completedTasks: Task[] = [];
  allTasks: Task[] = [];
  constructor() {}

  //function to get all of the pending Tasks
  //returns an array of Task
  getTasksService(): Task[] {
    return this.pendingTasks;
  }

  //add new tasks function
  addTaskService(newTask: Task) {
    this.pendingTasks.push(newTask);
  }

  //edit task function
  editTaskServe(id: string) {
    const currentEdit = this.pendingTasks.find((task) => task.id === id);
    if (currentEdit) {
      currentEdit.isEdited = true;
    }
    // console.log(this.pendingTasks);
  }

  //delete task function
  deleteTaskService(id: string) {
    this.pendingTasks = this.pendingTasks.filter((task) => task.id !== id);
  }

  //complete task funtion
  completeTaskService(id: string) {
    console.log(id);
    const completedTask = this.pendingTasks.find((task) => task.id === id);
    // console.log(completedTask);
    if (completedTask) {
      this.completedTasks.push(completedTask);
      this.deleteTaskService(id);
      console.log('Pending Tasks: ', this.pendingTasks);
      this.allTasks = [...this.pendingTasks, ...this.completedTasks];
    }
    console.log('All Tasks: ', this.allTasks);
  }
}
