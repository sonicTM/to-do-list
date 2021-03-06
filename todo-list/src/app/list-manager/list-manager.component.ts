import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from '../interfaces/todo-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  todoList: Observable<TodoItem[]>;

  // inject service to retrieve todo list
  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  // add item todo list
  addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  // remove item from list
  removeItem(item): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes): void {
    this.todoListService.updateItem(item, changes);
  }

}
