import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  // array of todos
  todoList: TodoItem[] = [
    {title: 'Install NodeJS'},
    {title: 'Install Angular CLI'},
    {title: 'Create new app'},
    {title: 'Serve app'},
    {title: 'Develop app'},
    {title: 'Deploy app'},
  ]

  constructor() { }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  addItem(item: TodoItem): void {
    this.todoList.push(item);
  }

}
