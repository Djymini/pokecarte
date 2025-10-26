import { Injectable } from '@angular/core';
import {BaseApi} from '../../../shared/services/base.api';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApi extends BaseApi{
  getProduct(){
    return this.getLocalData<Product>("product.json");
  }

  getProductsHype(){
    return this.getLocalData<Product[]>("product-hype.json");
  }

  getProductMainPromotion(){
    return this.getLocalData<Product[]>("main-promotion.json");
  }
}
