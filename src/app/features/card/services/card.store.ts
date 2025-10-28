import {computed, Injectable, signal} from '@angular/core';
import {Card} from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardStore {
  private newCardSignal = signal<Card | null>(null);

  newCard = computed(() => this.newCardSignal())

  addCard(card: Card): void {
    this.newCardSignal.set(card);
  }

  removeCard(): void {
    this.newCardSignal.set(null);
  }
}
