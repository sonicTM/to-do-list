import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // name of tag we will use in component
  templateUrl: './app.component.html', // template
  styleUrls: ['./app.component.scss'] // styles
})
export class AppComponent {
  // property
  title = 'todo-list';
}
