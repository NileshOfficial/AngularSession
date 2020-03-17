import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: "[app-inner-text-mod]"
})
export class InnerTextModDirective implements OnInit {
    
    constructor(private eleRef: ElementRef) {}
    
    ngOnInit() {
        this.eleRef.nativeElement.innerText = "Hello, I am Custom Directive";
    }
}