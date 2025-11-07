import {Component, computed, inject} from '@angular/core';
import {ProductList} from '../components/product-list/product-list';
import {Product} from '../models/product.model';
import {ProductStore} from '../services/product.store';
import {ProductFilter} from '../components/product-filter/product-filter';
import { ProductFilterDrawer } from "../components/product-filter-drawer/product-filter-drawer";

@Component({
  selector: 'app-products.page',
  imports: [
    ProductList,
    ProductFilter,
    ProductFilterDrawer
],
  template: `
    <section>
      <app-product-filter-drawer></app-product-filter-drawer>
      <app-product-filter></app-product-filter>
      <app-product-list></app-product-list>
    </section>
  `,
  styles: `
    section{
      padding: 16px;
      display: flex;
    }

    app-product-filter-drawer{
      display: none;
    }

    @media screen and (max-width: 1250px) {
      section{
        display: block;
      }

      app-product-filter-drawer{
        display: block;
        margin-bottom: 16px;
      }

      app-product-filter{
        display: none;
      }
    }

    @media screen and (max-width: 450px) {
      section{
        padding: 16px 2px;
      }
    }
    `,
})
export default class ProductsPage {
  productStore = inject(ProductStore);

}
