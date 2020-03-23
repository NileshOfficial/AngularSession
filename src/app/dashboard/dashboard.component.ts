import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class Dashboard {
    constructor(private router: Router) {
    }

    navigate(): void {
        this.router.navigate(['/newProduct']);
    }
}