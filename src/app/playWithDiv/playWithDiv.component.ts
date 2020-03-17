import { Component } from '@angular/core';

@Component({
    selector: "app-play-with-div",
    templateUrl: "./playWithDiv.component.html",
    styleUrls: ["./playWithDiv.component.css"]
})
export class PlayWithDivComponent {
    divColor: string = "red";
    divShown: boolean = true;

    showDiv = (show: boolean) => {
        this.divShown = show;

    }

    changeColor = (color: string) => {
        this.divColor = color;
    }

    getDivColor = () => this.divColor;
}