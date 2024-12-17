import { Component, SimpleChanges } from '@angular/core';
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
import { TaskService } from './services/task.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TodolistComponent,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //variables
  title = 'todolist';
  pendingTasks: Task[] = [];
  completedTasks: Task[] = [];
  allTasks: Task[] = [];
  today = new Date(); //to allow for due dates from today

  constructor(
    //taskService is the variable name to inject the TaskService
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.taskService.loadTasksFromStorage();
    this.updateTasksList();
  }

  updateTasksList() {
    this.pendingTasks = this.taskService.pendingTasks;
    this.completedTasks = this.taskService.completedTasks;
  }

  addTask(form: NgForm) {
    const { task, dueDate } = form.value;
    // console.log(dueDate);
    const newTask: Task = {
      id: uuidv4(),
      task: task,
      isEdited: false,
      due: dueDate,
    };
    //add the new task through the task service
    this.taskService.addTaskService(newTask);
    form.reset();
  }

  editTask(id: string) {
    this.taskService.editTaskServe(id);
  }

  deleteTask(id: string) {
    this.taskService.deleteTaskService(id);
    this.pendingTasks = this.taskService.pendingTasks;
  }

  completeTask(id: string) {
    this.taskService.completeTaskService(id);
    this.pendingTasks = this.taskService.pendingTasks;
    this.completedTasks = this.taskService.completedTasks;
  }

  clearCompleted() {
    this.taskService.clearCompletedTasks();
    this.updateTasksList();
  }
}
