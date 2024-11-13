import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../interfaces/interface';
@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  //defining an input variable to accept the todolist from the app.component
  @Input() todolist: Task[] = [];
}
