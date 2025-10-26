import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselProductHype } from '@app/features/home/components/carousel-product-hype/carousel-product-hype';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Product} from '@app/features/products/models/product.model';

describe('CarouselProductHype', () => {
  let component: CarouselProductHype;
  let fixture: ComponentFixture<CarouselProductHype>;
  let view:  HTMLElement;
  let products: Product[];
  const mockActivatedRoute = {
    params: of({}),
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselProductHype, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();

    products = [];

    fixture = TestBed.createComponent(CarouselProductHype);
    component = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.componentRef.setInput('productHype', products);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
