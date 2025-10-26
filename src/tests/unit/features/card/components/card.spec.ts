import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from '@app/features/card/components/card/card';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;
  let view:  HTMLElement;
  const mockActivatedRoute = {
    params: of({}),
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.componentRef.setInput('cardImage', 'image');
    fixture.componentRef.setInput('cardName', 'name');
    fixture.componentRef.setInput('width', '100');
    fixture.componentRef.setInput('height', '100');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('src name is cardImage', () => {
    const img = view.querySelector('#card')
    expect(img?.getAttribute('src')).toBe('image/high.png');
  });

  it('alt name is cardName', () => {
    const img = view.querySelector('#card')
    expect(img?.getAttribute('alt')).toBe('name');
  });

  it('height name is 100', () => {
    const img = view.querySelector('#card')
    expect(img?.getAttribute('height')).toBe('100');
  });

  it('width name is 100', () => {
    const img = view.querySelector('#card')
    expect(img?.getAttribute('width')).toBe('100');
  });
});
