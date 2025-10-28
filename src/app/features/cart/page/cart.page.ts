import {Component, computed, inject} from '@angular/core';
import {CartStore} from '../services/cart.store';
import {CartProduct} from '../components/cart-product/cart-product';
import {CartSummary} from '../components/cart-summary/cart-summary';

@Component({
  selector: 'app-cart.page',
  imports: [
    CartProduct,
    CartSummary
  ],
  template: `
    <section class="cart-page">
      <h2>Détail de votre panier <span class="cart-count">({{products().length}} articles)</span></h2>
      <div class="cart-layout">
        <div class="cart-products">
          @for (product of uniqueProducts(); track product) {
            <app-cart-product [product]="product" [products]="products()"></app-cart-product>
          }
        </div>
        <app-cart-summary [products]="products()"></app-cart-summary>
      </div>
    </section>
  `,
  styles: `
    .cart-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 32px;
      font-family: Arial, sans-serif;
    }

    .cart-count {
      color: #666;
      font-weight: normal;
    }

    .cart-layout {
      display: flex;
      gap: 32px;
      margin-top: 24px;
    }

    .cart-products {
      flex: 2;
    }
  `,
})
export default class CartPage {
  private cartStore = inject(CartStore);
  products = computed(() => this.cartStore.cart());
  uniqueProducts = computed(() => this.cartStore.cart().filter((item, index) => this.cartStore.cart().indexOf(item) === index));
}
