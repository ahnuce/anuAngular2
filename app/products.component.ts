import {Component} from 'angular2/core';
import {ProductService} from './product.service';

@Component({
  selector: 'products',
  template:
            `
              <h2>products</h2>
              {{ name }}
              <ul>
                <li *ngFor="#product of products">
                  {{ product }}
                </li>
              </ul>
            `,
            providers: [ProductService]
})

export class ProductsComponent {
  products: string[];
  name = "The names of the Products";
  constructor(productService: ProductService){
      this.products = productService.getProducts();
  }
}
