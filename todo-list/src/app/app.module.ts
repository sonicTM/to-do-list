import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

// decorator
@NgModule({
  // list of things relevent to module
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent
  ],
  // list of other ngModules required for this module
  imports: [
    BrowserModule
  ],
  providers: [],
  // relevant only to root. Tells angular which component is root
  bootstrap: [AppComponent]
})
export class AppModule { }
