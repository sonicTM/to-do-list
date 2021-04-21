import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  // property
  title = 'Hello World';

  constructor() {
    console.log('in constructor');
    this.changeTitle('My First Angular App - constructor');
    console.log(this.title);
  }

  ngOnInit(): void {
    console.log('in init');
    this.changeTitle('My First Angular App - init');
  }

  // method
  changeTitle(newTitle: string) {
    console.log(newTitle);
    this.title = newTitle;
  }

}
