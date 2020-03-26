import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = 'nilesh kumar';
  date: Date = new Date(15, 1, 17);
  str: string = "reverse";
  countable: string = "Apple is on table";
}
