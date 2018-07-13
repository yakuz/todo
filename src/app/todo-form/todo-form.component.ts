import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Task} from '../shared/task.model';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTask = new Task(value.task.trim(), false);

    this.todoService.addTask(newTask);

    form.reset();
  }

}
