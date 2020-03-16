import { Component } from '@angular/core';
import listItemDataTemplate from '../listItemData';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

let tempData:Array<listItemDataTemplate>  = [
  {
    track: "Calma",
    singer: "Pedro Capo",
    album: "Calma"
  },
  {
    track: "God's Plan",
    singer: "Drake",
    album: "Scorpion"
  },
  {
    track: "Hall of Fame",
    singer: "The Script, will.i.am",
    album: "#3 Deluxe Version"
  },
  {
    track: "Godzilla",
    singer: "Eminem, juice WRLD",
    album: "Music to be Murdered By"
  },
  {
    track: "Kamikaze",
    singer: "Eminem",
    album: "Kamikaze"
  }
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  listTitle: string = "My Playlist";
  // currentSelected: number = 0;
  
  listItemCount = 0;

  listData = new Map<number, listItemDataTemplate>();
  
  
  constructor() {
    tempData.forEach(item => {
      item.idx = this.listItemCount ++;
      this.listData.set(item.idx, item);
    });  
  }

  remove = (idx: number) => {
    console.log(idx);
    this.listData.delete(idx);
  }

  // setCurrentSelected = (idx: number) => {
  //   this.currentSelected = idx;
  // }

  addItemEventHandler = (event: listItemDataTemplate) => {
    event.idx = this.listItemCount ++;
    this.listData.set(event.idx, event);
  }
}