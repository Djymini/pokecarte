import {computed, Injectable, signal} from '@angular/core';
import {Product} from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  private cartSignal = signal<Product[]>([]);
  private isPopupVisibleSignal = signal<boolean>(false);

  cart = computed(() => this.cartSignal());
  isPopupVisible = computed(() => this.isPopupVisibleSignal());

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

  showPopup(): void {
    this.isPopupVisibleSignal.set(true);
  }

  hidePopup(): void {
    this.isPopupVisibleSignal.set(false);
  }

  clearCard(): void {
    this.cartSignal.update(products => []);
  }
}
