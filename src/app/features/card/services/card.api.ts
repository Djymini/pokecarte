import { Injectable } from '@angular/core';
import {BaseApi} from '../../../shared/services/base.api';
import {Card} from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardApi extends BaseApi {
  getRecentCard(): Promise<Card[]>{
    return this.get<Card[]>('cards?image=notnull:&sort:field=updated&sort:order=DESC&pagination:itemsPerPage=10')
  }

  getCardByName(name: String): Promise<Card[]>{
    return this.get<Card[]>(`cards?id=${name}`)
  }
}
