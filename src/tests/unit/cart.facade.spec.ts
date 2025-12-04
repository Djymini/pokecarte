import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CartFacade } from '@app/features/cart/services/cart.facade';
import {Product} from '@app/features/products/models/product.model';

describe('CartFacade', () => {
  let service: CartFacade;
  let product: Product;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(CartFacade);
    product = {
      id: 'swsh1-1',
      name: 'Celebi V',
      image: 'https://assets.tcgdex.net/fr/swsh/swsh1/1/high.webp',
      category: 'Pokemon',
      illustrator: 'PLANETA Igarashi',
      rarity: 'Holo Rare V',
      hp: 180,
      description: '',
      stage: 'De base',
      retreat: 1,
      price: 2.27,
      stock: 37,
      discount: 0.0,
      setId: 'swsh1',
      types: [],
      weakness: [],
      resistances: [],
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be add to cart', () => {
    service.addToCart(product);
    expect(service.cartStore.cart().length).toEqual(1);
  });

  it('should throw error if price is negative', () => {
    const invalid = {...product, price: -1};
    service.addToCart(product);
    expect(() => service.addToCart(invalid)).toThrowError();
  });

  it('should throw error if discount is negative', () => {
    const invalid = {...product, discount: -25};
    service.addToCart(product);
    expect(() => service.addToCart(invalid)).toThrowError();
  });

  it('should throw error if stock < 1', () => {
    const invalid = {...product, stock: 0};
    service.addToCart(product);
    expect(() => service.addToCart(invalid)).toThrowError();
  });

  it('should be remove product to cart', () => {
    for (let i = 0; i < 5; i++) {
      service.addToCart(product);
    }
    service.removeOneProduct(product);
    expect(service.cartStore.cart().length).toEqual(4);
  });

  it('should be remove all same product to cart', () => {
    for (let i = 0; i < 5; i++) {
      service.addToCart(product);
    }
    service.removeAllProduct(product);
    expect(service.cartStore.cart().length).toEqual(0);
  });
});
