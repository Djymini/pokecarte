import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList } from './product-list';
import {Product} from '@app/features/products/models/product.model';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

describe('ProductList', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;
  let view:  HTMLElement;
  let products: Product[];
  const mockActivatedRoute = {
    params: of({}),
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductList, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();

    products = [
      {
        card: {
          id: "xyp-XY99",
          localId: "XY99",
          name: "Lien Spirituel Ptéra",
          image: "https://assets.tcgdex.net/fr/xy/xyp/XY99"
        },
        price: 12.00,
        stock: 15,
        discount: 0
      },
      {
        card: {
          id: "xyp-XY99",
          localId: "XY99",
          name: "Lien Spirituel Ptéra",
          image: "https://assets.tcgdex.net/fr/xy/xyp/XY99"
        },
        price: 12.00,
        stock: 15,
        discount: 0
      },
      {
        card: {
          id: "xyp-XY99",
          localId: "XY99",
          name: "Lien Spirituel Ptéra",
          image: "https://assets.tcgdex.net/fr/xy/xyp/XY99"
        },
        price: 12.00,
        stock: 15,
        discount: 0
      }
    ];

    fixture = TestBed.createComponent(ProductList);
    view = fixture.nativeElement;
    fixture.componentRef.setInput('productList', products);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
