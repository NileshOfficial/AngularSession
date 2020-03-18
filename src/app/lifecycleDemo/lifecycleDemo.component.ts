import {
    Component,
    OnInit,
    OnChanges,
    SimpleChanges,
    Input,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

@Component({
    selector: "app-lifecycle-demo",
    templateUrl: "./lifecycleDemo.component.html",
    styleUrls: ["./lifecycleDemo.component.css"]
})
export class LifecycleDemoComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

    message: string;
    @Input('message') messageFromAbove: string;

    constructor() {
        console.log("constructor called");
    }

    ngOnInit() {
        console.log("ngOnInit called");
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log("ngOnChanges called");
    }

    ngDoCheck() {
        console.log("ngDoCheck called");
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit called");
    }

    ngAfterContentChecked() {
        console.log("ngAfterContentChecked called");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit called");
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked called");
    }

    ngOnDestroy() {
        console.log("ngOnDestroy called");
    }
}