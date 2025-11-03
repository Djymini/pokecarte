import {Component, computed, input} from '@angular/core';
import {Product} from '../../../products/models/product.model';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-cart-summary',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss',
})
export class CartSummary {
  products = input.required<Product[]>();

  totalPrice = computed(() => this.products().reduce((accumulator, currentValue) => accumulator + (currentValue.price - (currentValue.discount * 0.01 * currentValue.price)), 0))
}
