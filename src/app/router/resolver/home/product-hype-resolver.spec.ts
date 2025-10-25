import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productHypeResolver } from './product-hype-resolver';

describe('productHypeResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productHypeResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
