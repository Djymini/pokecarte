import {computed, Injectable, signal} from '@angular/core';
import {SetCardDetail, setCardDetailDefault} from '../../products/models/set-detail.model';
import {Product} from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HomeStore {
  private newSetSignal = signal<SetCardDetail>(setCardDetailDefault);
  private productsHypeSignal = signal<Product[]>([])
  private bestPromotionSignal = signal<Product[]>([]);

  newSet = computed(() => this.newSetSignal());
  productsHype = computed(() => this.productsHypeSignal());
  bestPromotion = computed(() => this.bestPromotionSignal());

  addNewSet(newSet: SetCardDetail): void {
    this.newSetSignal.set(newSet);
  }

  addProducts(products: Product[]) {
    this.productsHypeSignal.set(products)
  }

  addPromotions(promotions: Product[]) {
    this.bestPromotionSignal.set(promotions)
  }
}
