import { Component } from '@angular/core';
import { ProductStoreService } from '../services/productStoreService';
import { product } from '../productTemplate';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    id: string = "";
    name: string = "";
    description: string = "";
    count: number = 0;
    warning: boolean = false;

    constructor(private productStore: ProductStoreService,
        private router: Router) {}

    addProduct(): void {
        console.log(this.id, this.description, this.count, this.name);
        if (this.count > 0
            && this.id !== ""
            && this.name !== ""
            && this.description !== "") {
            this.warning = false;
            const productDetails: product = {
                id: this.id,
                name: this.name,
                description: this.description,
                count: this.count
            }
            this.productStore.addProduct(productDetails);
            this.router.navigate(['/dashboard']);
        } else this.warning = true;
    }
}