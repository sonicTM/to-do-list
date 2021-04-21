import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList: TodoItem[] = [
  {title: 'Install NodeJS'},
  {title: 'Install Angular CLI'},
  {title: 'Create new app'},
  {title: 'Serve app'},
  {title: 'Develop app'},
  {title: 'Deploy app'},
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    // get list in local storage or use default list
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
   }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  // push item and then update storage
  addItem(item: TodoItem): void {
    this.todoList.push(item);
    this.saveList();
  }

  // update existing item
  updateItem(item: TodoItem, changes): void {
    // locate item in list
    const index = this.todoList.indexOf(item);
    // ... spread operator
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  // remove item
  deleteItem(item: TodoItem): void {
    // look for item in list
    const index = this.todoList.indexOf(item);
    // remove item starting from index
    this.todoList.splice(index, 1);
    this.saveList();
  }

}
