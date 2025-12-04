import {computed, Injectable, signal} from '@angular/core';
import {Card} from '../models/card.model';
import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CardStore {
  private newCardSignal = signal<Product | null>(null);

  newCard = computed(() => this.newCardSignal())

  addCard(card: Product): void {
    this.newCardSignal.set(card);
  }

  removeCard(): void {
    this.newCardSignal.set(null);
  }
}
