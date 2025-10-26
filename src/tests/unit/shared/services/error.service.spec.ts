import { TestBed } from '@angular/core/testing';

import { ErrorService } from '@app/shared/services/error.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ErrorService', () => {
  let service: ErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ErrorService],
    });
    service = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Notify error', () => {
  let service: ErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ErrorService],
    });
    service = TestBed.inject(ErrorService);
  });

  it('should be notify error', () => {
    service.notify("Error test");
    expect(service.error()).toBe("Error test");
  });
});
