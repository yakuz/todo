import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Task} from '../shared/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks: Task[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.tasks = this.todoService.getTasks();
  }

  onCompletedTask(index: number) {
    this.todoService.completedTaskToggle(index);
  }

  onRemoveTask(index: number) {
    this.todoService.removeTask(index);
  }

}
