import {Component, inject} from '@angular/core';
import {ProductFacade} from '../../services/product.facade';

@Component({
  selector: 'app-product-filter-search',
  imports: [],
  templateUrl: './product-filter-search.html',
  styleUrl: './product-filter-search.scss',
})
export class ProductFilterSearch {
  searchText: string = "";
  productFacade = inject(ProductFacade);

  updateSearchText(event: any) {
    setTimeout(() => {
      this.searchText = event.target.value;
      this.productFacade.updateQuery(this.searchText);
    }, 500);
  }
}
