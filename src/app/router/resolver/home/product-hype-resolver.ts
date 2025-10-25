import { ResolveFn } from '@angular/router';
import {Product} from '../../../features/products/models/product.model';
import {inject} from '@angular/core';
import {HomeFacade} from '../../../features/home/services/home.facade';

export const productHypeResolver: ResolveFn<Product[]> = (route, state) => {
  const homeFacade = inject(HomeFacade);
  return homeFacade.getProductsHype();
};
