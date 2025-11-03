import {Component, computed, inject} from '@angular/core';
import {CartStore} from '../../services/cart.store';
import {PopupCartItem} from '../popup-cart-item/popup-cart-item';
import {CurrencyPipe} from '@angular/common';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-popup-cart',
  imports: [
    PopupCartItem,
    CurrencyPipe
  ],
  templateUrl: './popup-cart.html',
  styleUrl: './popup-cart.scss',
})
export class PopupCart {
  private cartStore = inject(CartStore);
  products = computed(() => this.cartStore.cart());
  uniqueProducts = computed(() => this.cartStore.cart().filter((item, index) => this.cartStore.cart().indexOf(item) === index));
  totalPrice = computed(() => this.products().reduce((accumulator, currentValue) => accumulator + (currentValue.price - (currentValue.discount * 0.01 * currentValue.price)), 0))

  constructor(
    private router: Router,
  ) {}

  goTotheCart(){
    this.cartStore.hidePopup();
    this.router.navigate(['/cart']);
  }

  hidePopupCart(){
    this.cartStore.hidePopup();
  }

}
