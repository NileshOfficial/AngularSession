import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input('head') cardHead: string;
    @Input('body') cardBody: string;
    @Input('footer') cardFooter: string;
}