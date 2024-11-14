import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../interfaces/interface';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  edit: boolean = false;
  //defining an input variable to accept the todolist from the app.component
  @Input() todolist: Task[] = [];

  //output events variables to send data to the parent(app)
  @Output() editTaskEvent = new EventEmitter();
  @Output() deleteTaskEvent = new EventEmitter();
  @Output() completeTaskEvent = new EventEmitter();

  //edit task method
  editTask(id: string) {
    // this.edit = true;
    this.editTaskEvent.emit(id);
  }

  //save editedTask
  saveEditedTask(task: Task) {
    task.isEdited = false;
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
}
