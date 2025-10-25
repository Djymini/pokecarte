import {Component, computed, inject} from '@angular/core';
import {OverlayBadge} from 'primeng/overlaybadge';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {CartStore} from '../../../../features/cart/services/cart.store';

@Component({
  selector: 'app-cart-button',
  imports: [
    OverlayBadge,
    Button,
    RouterLink
  ],
  templateUrl: './cart-button.html',
  styleUrl: './cart-button.scss',
})
export class CartButton {
  cartStore = inject(CartStore);
  productNumber = computed(() => this.cartStore.cart().length);
  disableBadge = computed(() => this.productNumber() < 1)
  /*private cartFacade = inject(CartFacade);*/
}
