import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { TodolistComponent } from './todolist/todolist.component';
import { Task } from './interfaces/interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todolist';
  //array of to contain all the tasks
  allTasks: Task[] = [];

  addTask(taskInput: HTMLInputElement) {
    const newTask: Task = {
      id: uuidv4(),
      task: taskInput.value,
      isCompleted: false,
    };
    this.allTasks.push(newTask);
    console.log(this.allTasks);
    taskInput.value = '';
  }
}
