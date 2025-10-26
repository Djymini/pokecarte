import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockIndicator } from '@app/features/products/components/stock-indicator/stock-indicator';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartStore} from '@app/features/cart/services/cart.store';

describe('StockIndicator', () => {
  let component: StockIndicator;
  let fixture: ComponentFixture<StockIndicator>;
  let view:  HTMLElement;
  const mockActivatedRoute = {
    params: of({}),
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockIndicator, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockIndicator);
    component = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.componentRef.setInput('stockValue', 10);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update stock indicator', () => {
    component.updateStockIndicator();

    expect(component.color).toEqual('#7BB241FF');
  });
});
