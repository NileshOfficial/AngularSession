import { Component } from '@angular/core';

interface albumData {
    track: string,
    singer: string,
    album: string
}

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"]
})
export class ListComponent {
    listHeading: string = "Top Charts"
    albums: Array<albumData> = [{
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
      }]
}