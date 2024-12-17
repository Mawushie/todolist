import { Task } from './../interfaces/Task.model';
import { Injectable } from '@angular/core';
// import { Task } from '../interfaces/Task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //array of to contain all the pending tasks
  pendingTasks: Task[] = [];
  completedTasks: Task[] = [];
  allTasks: { pending: Task[]; completed: Task[] } = {
    pending: [],
    completed: [],
  };

  constructor() {
    this.loadTasksFromStorage();
  }

  //load tasks from local storage
  loadTasksFromStorage() {
    const savedTasks = localStorage.getItem('tasks');
    // console.log(savedTasks);
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      this.pendingTasks = parsedTasks.pending;
      this.completedTasks = parsedTasks.completed;
    } else {
      this.pendingTasks = [];
      this.completedTasks = [];
    }
  }

  //update all tasks array
  updateAllTasks() {
    this.allTasks = {
      pending: this.pendingTasks,
      completed: this.completedTasks,
    };
    localStorage.setItem('tasks', JSON.stringify(this.allTasks));
  }

  //add new tasks function
  addTaskService(newTask: Task) {
    this.pendingTasks.push(newTask);
    this.updateAllTasks();
  }

  //edit task function
  editTaskServe(id: string) {
    const currentEdit = this.pendingTasks.find((task) => task.id === id);
    if (currentEdit) {
      currentEdit.isEdited = true;
    }
  }

  //delete task function
  deleteTaskService(id: string) {
    this.pendingTasks = this.pendingTasks.filter((task) => task.id !== id);
    this.updateAllTasks();
  }

  //complete task funtion
  completeTaskService(id: string) {
    const completedTask = this.pendingTasks.find((task) => task.id === id);
    // console.log(completedTask);
    if (completedTask) {
      this.completedTasks.push(completedTask);
      this.deleteTaskService(id);
    }
  }

  clearCompletedTasks() {
    console.log('cleared');
    this.completedTasks = [];
    this.updateAllTasks();
  }
}
