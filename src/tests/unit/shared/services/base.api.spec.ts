import { TestBed } from '@angular/core/testing';

import { BaseApi } from '@app/shared/services/base.api';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('BaseApi', () => {
  let service: BaseApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(BaseApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
