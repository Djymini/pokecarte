import { ResolveFn } from '@angular/router';
import {inject} from '@angular/core';
import {ProductFacade} from '../../../features/products/services/product.facade';

export const productsListResolver: ResolveFn<boolean> = (route, state) => {
  const productFacade = inject(ProductFacade);
  productFacade.loadProducts();
  return true;
};
