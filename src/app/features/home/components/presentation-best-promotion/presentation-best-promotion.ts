import {Component, input} from '@angular/core';
import {Product} from '../../../products/models/product.model';
import {ProductCard} from '../../../products/components/product-card/product-card';
import {
  MainPresentationPromotion
} from '../../../products/components/main-presentation-promotion/main-presentation-promotion';

@Component({
  selector: 'app-presentation-best-promotion',
  imports: [
    ProductCard,
    MainPresentationPromotion
  ],
  templateUrl: './presentation-best-promotion.html',
  styleUrl: './presentation-best-promotion.scss',
})
export class PresentationBestPromotion {
  bestPromotion = input.required<Product[]>();
}
