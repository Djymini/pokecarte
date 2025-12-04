import {inject, Injectable} from '@angular/core';
import {CardStore} from './card.store';
import {CardApi} from './card.api';
import {Card} from '../models/card.model';
import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CardFacade {
  cardStore = inject(CardStore);
  cardApi = inject(CardApi);

  async loadCardByName(name: string): Promise<Product>{
    const result = await this.cardApi.getCardByName(name);
    this.cardStore.addCard(result[0]);
    return result[0]
  }
}
