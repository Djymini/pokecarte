import {Component, computed, inject} from '@angular/core';
import {ProductList} from '../components/product-list/product-list';
import {Product} from '../models/product.model';
import {ProductStore} from '../services/product.store';
import {ProductFilter} from '../components/product-filter/product-filter';

@Component({
  selector: 'app-products.page',
  imports: [
    ProductList,
    ProductFilter
  ],
  template: `
    <section>
      <app-product-filter></app-product-filter>
      <app-product-list></app-product-list>
    </section>
  `,
  styles: `
    section{
      padding: 16px;
      display: flex;
    }`,
})
export default class ProductsPage {
  productStore = inject(ProductStore);

}
