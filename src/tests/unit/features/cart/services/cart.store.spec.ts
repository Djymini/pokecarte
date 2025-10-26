import { TestBed } from '@angular/core/testing';

import { CartStore } from '@app/features/cart/services/cart.store';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('CartStore', () => {
  let service: CartStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(CartStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
