import {computed, Injectable, signal} from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductStore {
  private productsSignal = signal<Product[]>([]);
  private querySignal = signal<string>("");
  private setFilterSignal = signal<string[]>([]);

  products = computed(() => this.productsSignal());
  query = computed(() => this.querySignal());
  setFilter = computed(() => this.setFilterSignal());
  productsFilter = computed(() => {
    let result: Product[] = [];

    if(this.query() !== ""){
      result = this.products().filter((item: Product) => item.name.toLowerCase().includes(this.query().toLowerCase()));
    }else {
      result = this.products();
    }

    if(this.setFilter().length >= 1){
      result = result.filter((item: Product) => this.setFilter().includes(item.id.split("-")[0]))
    }

    console.log("coucou2")
    console.log(result);

    return result;
  });

  addProduct(product: Product) {
    console.log(product);
    this.productsSignal.update(products => [...products, product]);
    console.log(this.productsSignal()[this.productsSignal().length-1]);
  }

  removeUser(id: string): void {
    this.productsSignal.update(products => products.filter(product => product.id !== id));
  }

  updateProducts(newProduct: Product[]): void {
    this.productsSignal.set(newProduct);
  }

  updateQuery(newQuery: string): void {
    this.querySignal.set(newQuery);
  }

  setSetFilter(newSetFilter: string[]): void {
    this.setFilterSignal.set(newSetFilter);
  }

  addSetFilter(newSetFilter: string): void {
    this.setFilterSignal.update(stringArray => [...stringArray, newSetFilter]);
  }

  removeSetFilter(valueToRemove: string): void {
    this.setFilterSignal.update(currentArray =>
      currentArray.filter(item => item !== valueToRemove)
    );
  }
}
