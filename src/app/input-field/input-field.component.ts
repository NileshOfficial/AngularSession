import { Component } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {

  inputVal: string;
  constructor() { }

  updateInput = event => {
    this.inputVal = event.target.value;
  }

  onclick = event => {
    // something
  }
}
