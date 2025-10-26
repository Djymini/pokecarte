import { TestBed } from '@angular/core/testing';

import { ProductApi } from '@app/features/products/services/product.api';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('ProductApi', () => {
  let service: ProductApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(ProductApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
