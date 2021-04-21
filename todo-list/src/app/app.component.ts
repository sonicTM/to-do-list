import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root', // name of tag we will use in component
  templateUrl: './app.component.html', // template
  styleUrls: ['./app.component.scss'] // styles
})
export class AppComponent {

  // property
  title = 'My To Do List APP';

}
