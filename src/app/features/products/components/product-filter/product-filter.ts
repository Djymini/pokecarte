import { Component } from '@angular/core';
import {ProductFilterSearch} from '../product-filter-search/product-filter-search';
import {ProductFilterCheckbox} from '../product-filter-checkbox/product-filter-checkbox';

@Component({
  selector: 'app-product-filter',
  imports: [
    ProductFilterSearch,
    ProductFilterCheckbox
  ],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.scss',
})
export class ProductFilter {
  clearFilter(): void {
    console.log('clear filter');
  }


}
