import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { TodolistComponent } from './todolist/todolist.component';
import { Task } from './interfaces/Task.model';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDatepickerModule,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TodolistComponent,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  today = new Date();
  dueDate: string = '';
  title = 'todolist';

  //function to get due date value
  getDueDate(event: MatDatepickerInputEvent<any, any>) {
    // console.log(event.value);
    this.dueDate = event.value;
  }
  //array of to contain all the tasks
  pendingTasks: Task[] = [];
  completedTasks: Task[] = [];
  allTasks: Task[] = [];

  //error handling for empty input
  inputError: boolean = false;
  addTask(taskInput: HTMLInputElement) {
    if (taskInput.value === '') {
      this.inputError = true;
      // console.log('empty input');
      return;
    } else {
      this.inputError = false;
      const newTask: Task = {
        id: uuidv4(),
        task: taskInput.value,
        isEdited: false,
        due: this.dueDate,
      };
      this.pendingTasks.push(newTask);
      this.allTasks = [...this.pendingTasks, ...this.completedTasks];
      // console.log(this.allTasks);
      taskInput.value = '';
    }
  }

  editTask(id: string) {
    // console.log(id);
    const currentEdit = this.pendingTasks.find((task) => task.id === id);
    if (currentEdit) {
      currentEdit.isEdited = true;
    }
  }

  deleteTask(id: string) {
    // console.log(id);
    this.pendingTasks = this.pendingTasks.filter((task) => task.id !== id);
    this.allTasks = [...this.pendingTasks, ...this.completedTasks];
    console.log(this.allTasks);
  }
  completeTask(id: string) {
    const completedTask = this.pendingTasks.find((task) => task.id === id);
    // console.log(completedTask);
    if (completedTask) {
      this.completedTasks.push(completedTask);
      this.deleteTask(id);
      this.allTasks = [...this.pendingTasks, ...this.completedTasks];
    }
    console.log(this.allTasks);
  }
}
