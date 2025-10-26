import { TestBed } from '@angular/core/testing';

import { HomeStore } from '@app/features/home/services/home.store';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('HomeStore', () => {
  let service: HomeStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(HomeStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
