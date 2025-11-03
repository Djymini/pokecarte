import {inject, Injectable} from '@angular/core';
import {Product} from '../../products/models/product.model';
import {CartStore} from './cart.store';
import {CartRules} from '../domain/cart.rules';

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  cartStore = inject(CartStore);

  addToCart(product: Product): void {
    CartRules.validateAddProduct(product);
    this.cartStore.addProduct(product);
  }

  removeOneProduct(product: Product): void {
    this.cartStore.removeProduct(product);
  }

  removeAllProduct(product: Product): void {
    this.cartStore.removeAllProduct(product);
  }

  showPopup(){
    this.cartStore.showPopup();
  }

  hidePopup(){
    this.cartStore.hidePopup();
  }
}
