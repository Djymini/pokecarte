import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { bestPromotionResolver } from './best-promotion-resolver';

describe('bestPromotionResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => bestPromotionResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
