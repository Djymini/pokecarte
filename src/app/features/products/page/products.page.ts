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
    <main>
      <app-product-filter></app-product-filter>
      <app-product-list [productList]="productList()"></app-product-list>
    </main>
  `,
  styles: `
    main{
      padding: 16px;
      display: flex;
    }`,
})
export default class ProductsPage {
  productStore = inject(ProductStore);

  productList = computed(() => {
    let result: Product[] = [];

    if(this.productStore.query() !== ""){
      result = this.productStore.products().filter((item: Product) => item.card.name.toLowerCase().includes(this.productStore.query().toLowerCase()));
    }else {
      result = this.productStore.products();
    }

    if(this.productStore.setFilter().length >= 1){
      result = result.filter((item: Product) => this.productStore.setFilter().includes(item.card.id.split("-")[0]))
    }

    return result;
  });
}
