import { TestBed } from '@angular/core/testing';

import { HomeFacade } from '@app/features/home/services/home.facade';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('HomeFacade', () => {
  let service: HomeFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(HomeFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
