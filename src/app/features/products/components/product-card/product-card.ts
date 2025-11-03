import {Component, inject, input, output} from '@angular/core';
import {Product} from '../../models/product.model';
import {Card} from '../../../card/components/card/card';
import {StockIndicator} from '../stock-indicator/stock-indicator';
import {PriceIndicator} from '../price-indicator/price-indicator';
import {CartFacade} from '../../../cart/services/cart.facade';
import {Toast} from 'primeng/toast';
import {NgOptimizedImage} from '@angular/common';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-product-card',
  imports: [
    Card,
    StockIndicator,
    PriceIndicator
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  private cartFacade = inject(CartFacade);
  product = input.required<Product>()

  productAdded = output<Product>();

  cardWidth: string = '167';
  cardHeight: string = '230';

  addToCart(): void {
    if (this.product().stock > 0) {
      this.cartFacade.addToCart(this.product());
      this.cartFacade.showPopup();
    }
  }
}
