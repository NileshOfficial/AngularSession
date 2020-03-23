import { Component } from '@angular/core';
import { ProductStoreService } from './services/productStoreService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductStoreService]
})
export class AppComponent {
  
  constructor(private productStore: ProductStoreService){}
}
