import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../interfaces/Task.model';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HighlightOverduePipe } from '../pipes/highlight-overdue.pipe';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [MatIconModule, FormsModule, DatePipe, HighlightOverduePipe],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  today = new Date();
  //defining an input variable to accept the todolist from the app.component
  @Input() todoList: Task[] = [];

  //output events variables to send data to the parent(app)
  @Output() editTaskEvent = new EventEmitter();
  @Output() deleteTaskEvent = new EventEmitter();
  @Output() completeTaskEvent = new EventEmitter();

  //edit task method
  editTask(id: string) {
    this.editTaskEvent.emit(id);
  }

  //save editedTask
  saveEditedTask(task: Task) {
    task.isEdited = false;
    this.taskService.updateAllTasks();
  }

  //delete task method
  deleteTask(id: string) {
    // console.log(id);
    //passing the id to the parent(app) component
    this.deleteTaskEvent.emit(id);
  }

  //complete task method
  completeTask(id: string) {
    // console.log(id);
    //passing the id to the parent(app) component
    this.completeTaskEvent.emit(id);
  }

  constructor(private taskService: TaskService) {}
}
