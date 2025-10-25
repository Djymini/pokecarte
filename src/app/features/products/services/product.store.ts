import {computed, Injectable, signal} from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductStore {
  private productsSignal = signal<Product[]>([]);

  products = computed(() => this.productsSignal());

  addProduct(product: Product) {
    this.productsSignal.update(products => [...products, product])
  }

  removeUser(id: string): void {
    this.productsSignal.update(products => products.filter(product => product.card.id !== id));
  }
}
