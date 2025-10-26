import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { newSetResolver } from '@app/router/resolver/home/new-set-resolver';
import {SetCardDetail} from '@app/features/products/models/set-detail.model';

describe('newSetResolver', () => {
  const executeResolver: ResolveFn<SetCardDetail> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => newSetResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
