import {Component, input} from '@angular/core';
import {ProductCard} from '../product-card/product-card';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  productList = input.required<Product[]>();
}
