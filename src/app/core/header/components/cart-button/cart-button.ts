import {Component, computed} from '@angular/core';
import {OverlayBadge} from 'primeng/overlaybadge';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';

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
  productNumber = computed(() => /*this.cartFacade.getCountProductsCart()*/ 2+2);
  disableBadge = computed(() => this.productNumber() < 1)
  /*private cartFacade = inject(CartFacade);*/
}
