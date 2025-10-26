import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessage } from '@app/shared/components/error/error-message/error-message';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';

describe('ErrorMessage', () => {
  let component: ErrorMessage;
  let fixture: ComponentFixture<ErrorMessage>;
  let view:  HTMLElement;
  const mockActivatedRoute = {
    params: of({}),
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessage, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorMessage);
    component = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.componentRef.setInput('error', "error");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
