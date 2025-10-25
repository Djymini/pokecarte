import {computed, Injectable, signal} from '@angular/core';
import {Product} from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  private cartSignal = signal<Product[]>([]);

  cart = computed(() => this.cartSignal());

  addProduct(product: Product): void {
    this.cartSignal.update(products => [...products, product]);
  }

  removeAllProduct(product: Product): void {
    this.cartSignal.update(products => products.filter((element, index) => element.card.id !== product.card.id));
  }

  removeProduct(product: Product): void {
    const indexForRemove = this.cartSignal().indexOf(product)
    if (indexForRemove !== -1) {
      this.cartSignal.update(products => products.filter((element, index) => index !== indexForRemove));
    }
  }

  clearCard(): void {
    this.cartSignal.update(products => []);
  }
}
