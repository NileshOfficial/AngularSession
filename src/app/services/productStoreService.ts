import { product } from '../productTemplate';

export class ProductStoreService {
    products: Array<product>;

    constructor() {}

    addProduct(product: product): void {
        this.products.push(product);
    }

    removeProduct(idx: number): void {
        this.products.splice(idx, 0);
    }
}