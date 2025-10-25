import {inject, Injectable} from '@angular/core';
import {ProductApi} from '../../products/services/product.api';
import {BaseApi} from '../../../shared/services/base.api';
import {SetCardDetail} from '../../products/models/set-detail.model';
import {firstValueFrom} from 'rxjs';
import {SetCard} from '../../products/models/set.model';
import {Product} from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HomeApi extends BaseApi{
  productApi = inject(ProductApi);

  getNewSetCard(): Promise<SetCardDetail> {
    return firstValueFrom(this.http.get<SetCardDetail>(`https://api.tcgdex.net/v2/fr/sets/sv06`));
  }

  getSetCard(): Promise<SetCard[]> {
    return firstValueFrom(this.http.get<SetCard[]>(this.BASE_URL+"sets?logo=notnull:&pagination:itemsPerPage=9"));
  }

  getCard(): Promise<Product[]>{
    return this.productApi.getProductHype();
  }

  getPromotion(): Promise<Product[]>{
    return this.productApi.getProductMainPromotion()
  }
}
