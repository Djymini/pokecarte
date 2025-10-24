import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartButton } from '@app/core/header/components/cart-button/cart-button';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('CartButton', () => {
  let component: CartButton;
  let fixture: ComponentFixture<CartButton>;
  const mockActivatedRoute = {
    params: of({}),         // ou { id: 123 } si tu attends un id
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartButton],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
