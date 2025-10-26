import { TestBed } from '@angular/core/testing';

import { ProductFacade } from '@app/features/products/services/product.facade';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('ProductFacade', () => {
  let service: ProductFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(ProductFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
