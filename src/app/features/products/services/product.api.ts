import { Injectable } from '@angular/core';
import {BaseApi} from '../../../shared/services/base.api';
import {Product} from '../models/product.model';
import {Observable} from 'rxjs';
import {CardDetail} from '../../card/models/card-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApi extends BaseApi{
  getProductDetail(id:string){
    return this.get<CardDetail>("/products/"+id);
  }

  getProduct(){
    return this.get<Product[]>("/products");
  }

  getProductsHype(){
    return this.getLocalData<Product[]>("/products");
  }

  getProductMainPromotion(){
    return this.getLocalData<Product[]>("/products");
  }
}
