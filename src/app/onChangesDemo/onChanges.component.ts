import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-on-changes',
    templateUrl: './onChanges.component.html',
    styleUrls: ['./onChanges.component.css']
})
export class OnChangesComponent implements OnChanges{
    @Input() color: string;
    colorCopy: string;

    ngOnChanges(changes: SimpleChanges) {
        this.colorCopy = this.color;
    }
}