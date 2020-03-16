import { Component, Input, Output } from '@angular/core';
import data from '../listItemData';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent {

  @Input('itemData') data: data;

  @Output('selected') selected: boolean;
  
  constructor() { }

  setSelected = _ => {
    this.selected = true;
  }

}
