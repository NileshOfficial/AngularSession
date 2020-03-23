import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductStoreService } from '../services/productStoreService';
import { product } from '../productTemplate';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class Dashboard {
    productsList: Array<product>;
    constructor(private router: Router,
                private productStore: ProductStoreService) {
                    this.productsList = this.productStore.products;
                }

    navigate(): void {
        this.router.navigate(['/newProduct']);
    }
}