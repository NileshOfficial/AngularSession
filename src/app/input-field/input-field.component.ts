import { Component, EventEmitter, Output } from '@angular/core';
import listItemDataTemplate from '../listItemData';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {

  track: string;
  singer: string;
  album: string;

  disableAdd:boolean = true;

  @Output() addListItemEvent = new EventEmitter<listItemDataTemplate>()

  constructor() { }

  emitAddListItemEvent = () => {
    console.log("happened");
    let eventData: listItemDataTemplate = {
      track: this.track,
      singer: this.singer,
      album: this.album
    };
    this.addListItemEvent.emit(eventData);
  }

  decideToDisable = () => {
    this.disableAdd = (this.track && this.singer && this.album)
              ? false
              : true;
  }
}
