import { Component } from '@angular/core';
import data from '../listItemData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  listTitle: string = "My Playlist";
  currentSelected: number = 0;
  
  listData: Array<data> = [
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
  
  constructor() { }

  addItem = (item: data) => {
    this.listData.push(item);
  }

  remove = (idx: number) => {
    this.listData.splice(idx, 1);
  }

  setCurrentSelected = (idx: number) => {
    this.currentSelected = idx;
  }
}