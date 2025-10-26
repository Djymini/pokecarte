import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productHypeResolver } from '@app/router/resolver/home/product-hype-resolver';
import {Product} from '@app/features/products/models/product.model';

describe('productHypeResolver', () => {
  const executeResolver: ResolveFn<Product[]> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => productHypeResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
