import {Component, computed, inject, input} from '@angular/core';
import {CartStore} from '../../services/cart.store';
import {Product} from '../../../products/models/product.model';
import {PriceIndicator} from '../../../products/components/price-indicator/price-indicator';

@Component({
  selector: 'app-cart-product',
  imports: [
    PriceIndicator
  ],
  templateUrl: './cart-product.html',
  styleUrl: './cart-product.scss',
})
export class CartProduct {
  product = input.required<Product>();
  products = input.required<Product[]>();
  numberSameProduct = computed(() => this.products().filter((element) => element.id === this.product().id).length)

  private cartStore = inject(CartStore);

  remove() {
    this.cartStore.removeAllProduct(this.product());
  }

  decrease() {
    this.cartStore.removeProduct(this.product());
  }

  add() {
    this.cartStore.addProduct(this.product());
  }
}
