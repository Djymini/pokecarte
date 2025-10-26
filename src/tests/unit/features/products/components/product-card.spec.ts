import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCard } from '@app/features/products/components/product-card/product-card';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '@app/features/products/models/product.model';
import {CartFacade} from '@app/features/cart/services/cart.facade';
import {CartStore} from '@app/features/cart/services/cart.store';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';


describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;
  let view:  HTMLElement;
  let cartFacade: CartFacade;
  let product: Product;
  const mockActivatedRoute = {
    params: of({}),
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    registerLocaleData(localeFr);
    await TestBed.configureTestingModule({
      imports: [ProductCard, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();

    cartFacade = TestBed.inject(CartFacade);
    product = {
      card: {
        id: "xyp-XY99",
        localId: "XY99",
        name: "Lien Spirituel Ptéra",
        image: "https://assets.tcgdex.net/fr/xy/xyp/XY99"
      },
      price: 12.00,
      stock: 15,
      discount: 0
    };

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.componentRef.setInput('product', product);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add to cart', () => {
    component.addToCart();

    const cartStore = TestBed.inject(CartStore);
    expect(cartStore.cart().length).toEqual(1);
  });
});
