import {Component, computed, inject, input} from '@angular/core';
import {Product} from '../../../products/models/product.model';
import {NgOptimizedImage} from '@angular/common';
import {PriceIndicator} from '../../../products/components/price-indicator/price-indicator';
import {CartStore} from '../../services/cart.store';
import {CartFacade} from '../../services/cart.facade';

@Component({
  selector: 'app-popup-cart-item',
  imports: [
    NgOptimizedImage,
    PriceIndicator
  ],
  templateUrl: './popup-cart-item.html',
  styleUrl: './popup-cart-item.scss',
})
export class PopupCartItem {
  cartStore = inject(CartStore);
  cartFacade = inject(CartFacade);

  product = input.required<Product>();
  products = this.cartStore.cart;
  numberSameProduct = computed(() => this.products().filter((element) => element.id === this.product().id).length)

  increaseQuantity(){
    this.cartFacade.addToCart(this.product());
  }

  decreaseQuantity(){
    this.cartFacade.removeOneProduct(this.product());
  }

  removeProduct(){
    this.cartFacade.removeAllProduct(this.product());
  }
}
