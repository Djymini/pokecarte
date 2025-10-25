import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { newSetResolver } from './new-set-resolver';

describe('newSetResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => newSetResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
