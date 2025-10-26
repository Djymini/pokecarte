import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPresentationPromotion } from '@app/features/products/components/main-presentation-promotion/main-presentation-promotion';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '@app/features/products/models/product.model';
import {CartFacade} from '@app/features/cart/services/cart.facade';
import {CartStore} from '@app/features/cart/services/cart.store';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

describe('MainPresentationPromotion', () => {
  let component: MainPresentationPromotion;
  let fixture: ComponentFixture<MainPresentationPromotion>;
  let cartFacade: CartFacade;
  let cartStore: CartStore;
  let view:  HTMLElement;
  let product: Product;
  const mockActivatedRoute = {
    params: of({}),
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    registerLocaleData(localeFr);
    await TestBed.configureTestingModule({
      imports: [MainPresentationPromotion, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}],
    })
    .compileComponents();

    cartStore = TestBed.inject(CartStore);
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

    fixture = TestBed.createComponent(MainPresentationPromotion);
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

    expect(cartStore.cart().length).toEqual(1);
  });
});
