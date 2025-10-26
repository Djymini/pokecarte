import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationBestPromotion } from '@app/features/home/components/presentation-best-promotion/presentation-best-promotion';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {Product} from '@app/features/products/models/product.model';

describe('PresentationBestPromotion', () => {
  let component: PresentationBestPromotion;
  let fixture: ComponentFixture<PresentationBestPromotion>;
  let view:  HTMLElement;
  let products: Product[];
  const mockActivatedRoute = {
    params: of({}),
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationBestPromotion, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();

    products = [];

    fixture = TestBed.createComponent(PresentationBestPromotion);
    component = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.componentRef.setInput('bestPromotion', products);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
