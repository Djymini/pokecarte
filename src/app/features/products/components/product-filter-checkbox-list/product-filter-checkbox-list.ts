import {Component, computed, inject, input, signal} from '@angular/core';
import {ProductFacade} from '../../services/product.facade';
import {ProductFilterCheckboxItem} from '../product-filter-checkbox-item/product-filter-checkbox-item';

@Component({
  selector: 'app-product-filter-checkbox-list',
  imports: [
    ProductFilterCheckboxItem
  ],
  templateUrl: './product-filter-checkbox-list.html',
  styleUrl: './product-filter-checkbox-list.scss',
})
export class ProductFilterCheckboxList {
  name = input.required<string>();
  arrayCheckboxName = input.required<string[]>();
  arrayFilter = input.required<string[]>();
  listIsVisible = signal<boolean>(false);
  query = signal<string>("");
  productFacade = inject(ProductFacade);

  arrayFilterCheckboxName = computed(() => {
    const filter = this.query();
    if (filter === "") {
      return  this.arrayCheckboxName();
    } else {
      return this.arrayCheckboxName().filter((element) => element.toLowerCase().indexOf(filter.toLowerCase()) > -1);
    }
  });

  toggleList(){
    if (this.listIsVisible()){
      this.listIsVisible.set(false);
    }else {
      this.listIsVisible.set(true);
    }
  }

  filterCheckboxName = (e: any) => {
    const filter = e.target.value.toUpperCase();
    this.query.set(filter);
  }

  onFilterChecked(name: string): void {
    this.arrayFilter().push(name);
    this.productFacade.addSetFilter(name)
    console.log(this.arrayFilter());
  }

  onFilterNotChecked(name: string): void {
    const index = this.arrayFilter().indexOf(name);
    if (index !== -1) {
      this.arrayFilter().splice(index, 1);
    }
    this.productFacade.removeSetFilter(name)
    console.log(this.arrayFilter());
  }
}
