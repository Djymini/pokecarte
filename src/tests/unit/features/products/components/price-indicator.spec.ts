import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceIndicator } from '@app/features/products/components/price-indicator/price-indicator';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartStore} from '@app/features/cart/services/cart.store';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';


describe('PriceIndicator', () => {
  let component: PriceIndicator;
  let fixture: ComponentFixture<PriceIndicator>;
  let view:  HTMLElement;
  const mockActivatedRoute = {
    params: of({}),
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    registerLocaleData(localeFr);
    await TestBed.configureTestingModule({
      imports: [PriceIndicator, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceIndicator);
    component = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.componentRef.setInput('price', 10);
    fixture.componentRef.setInput('discount', 50);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update show price discount', () => {
    component.updateShowPriceDiscount();

    expect(component.showPriceDiscount).toBeTrue();
  });
});
