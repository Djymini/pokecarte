import {Component, inject, input} from '@angular/core';
import {CartFacade} from '../../../cart/services/cart.facade';
import {Product} from '../../models/product.model';
import {Card} from '../../../card/components/card/card';
import {StockIndicator} from '../stock-indicator/stock-indicator';
import {PriceIndicator} from '../price-indicator/price-indicator';

@Component({
  selector: 'app-main-presentation-promotion',
  imports: [
    Card,
    StockIndicator,
    PriceIndicator
  ],
  templateUrl: './main-presentation-promotion.html',
  styleUrl: './main-presentation-promotion.scss',
})
export class MainPresentationPromotion {
  private cartFacade = inject(CartFacade);
  product = input.required<Product>()

  widthCard: string = "251";
  heightCard: string = "345";

  addToCart(): void {
    if (this.product().stock > 0) {
      this.cartFacade.addToCart(this.product());
    }
  }
}
