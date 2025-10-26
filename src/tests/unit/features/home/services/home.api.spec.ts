import { TestBed } from '@angular/core/testing';

import { HomeApi } from '@app/features/home/services/home.api';
import {ButtonWithGradient} from '@app/shared/components/button-with-gradient/button-with-gradient';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('HomeApi', () => {
  let service: HomeApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(HomeApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
