import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './services/todo-list.service';

// decorator
@NgModule({
  // list of things relevent to module
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent
  ],
  // list of other ngModules required for this module
  imports: [
    BrowserModule
  ],
  providers: [TodoListService],
  // relevant only to root. Tells angular which component is root
  bootstrap: [AppComponent]
})
export class AppModule { }
