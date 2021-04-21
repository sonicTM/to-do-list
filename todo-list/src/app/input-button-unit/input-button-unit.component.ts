import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  // pass value to parent
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  // property
  title = '';

  constructor() {
  }

  ngOnInit(): void {

  }

  submitValue(newTitle: string): void {
    // emit event to parent
    this.submit.emit(newTitle);
  }


}
