import { ResolveFn } from '@angular/router';
import {CardDetail} from '../../../features/card/models/card-detail.model';
import {inject} from '@angular/core';
import {ProductFacade} from '../../../features/products/services/product.facade';

export const productDetailResolver: ResolveFn<CardDetail> = (route, state) => {
  let idParams = route.paramMap.get('id');
  if(!idParams){
    idParams = '0';
  }
  return inject(ProductFacade).loadProductDetail(idParams);
};
