import { Injectable } from '@angular/core';
import {BaseApi} from '../../../shared/services/base.api';
import {Card} from '../models/card.model';
import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CardApi extends BaseApi {
  getRecentCard(): Promise<Product[]> {
    return this.get<Product[]>(
      '/products'
    );
  }

  getCardByName(name: String): Promise<Product[]> {
    return this.get<Product[]>(`/products`);
  }
}
