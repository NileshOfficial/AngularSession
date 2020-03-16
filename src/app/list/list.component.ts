import { Component } from '@angular/core';

interface listDataItem {
  track: string,
  singer: string,
  album: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  listTitle: string;
  listData: Array<listDataItem>;
  currentSelected: number = 0;
  
  constructor() { }

  addItem = (item: listDataItem) => {
    this.listData.push(item);
  }

  remove = (idx: number) => {
    this.listData.splice(idx, 1);
  }

  setCurrentSelected = (idx: number) => {
    this.currentSelected = idx;
  }
}
