import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { bestPromotionResolver } from '@app/router/resolver/home/best-promotion-resolver';
import {Product} from '@app/features/products/models/product.model';

describe('bestPromotionResolver', () => {
  const executeResolver: ResolveFn<Product[]> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => bestPromotionResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
