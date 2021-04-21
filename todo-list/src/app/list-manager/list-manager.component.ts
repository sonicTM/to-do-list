import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';


@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // array of todos
  todoList: TodoItem[] = [
    {title: 'Install NodeJS'},
    {title: 'Install Angular CLI'},
    {title: 'Create new app'},
    {title: 'Serve app'},
    {title: 'Develop app'},
    {title: 'Deploy app'},
  ]

  // add item todo list
  addItem(title: string) {
    this.todoList.push({title});
  }

}
