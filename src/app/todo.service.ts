import { Injectable } from '@angular/core';
import {Task} from './shared/task.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private exampleTasks: Task[] = [
    new Task('Make a pizza', true),
    new Task('Eat pizza', false)
  ];

  private tasks: Task[] = JSON.parse(localStorage.getItem('todos')) || this.exampleTasks;

  private updateStore() {
    localStorage.setItem('todos', JSON.stringify(this.tasks));
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.updateStore();
  }

  completedTaskToggle(index: number) {
    this.tasks[index].completed = this.tasks[index].completed ? false : true;
    this.updateStore();
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.updateStore();
  }
}
