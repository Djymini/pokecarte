import { TestBed } from '@angular/core/testing';

import { ProductStore } from '@app/features/products/services/product.store';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('ProductStore', () => {
  let service: ProductStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(ProductStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
