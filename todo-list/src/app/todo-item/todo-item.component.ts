import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  // pass values
  @Input() item: TodoItem; // define type

  // pass to parent to remove item
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(): void {
    // emit event to parent
    this.remove.emit(this.item);
  }

}
