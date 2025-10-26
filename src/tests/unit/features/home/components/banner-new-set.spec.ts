import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNewSet } from '@app/features/home/components/banner-new-set/banner-new-set';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SetCardDetail} from '@app/features/products/models/set-detail.model';
import {Card} from '@app/features/card/models/card.model';

describe('BannerNewSet', () => {
  let component: BannerNewSet;
  let fixture: ComponentFixture<BannerNewSet>;
  let view:  HTMLElement;
  let setCard: SetCardDetail;
  let cards: Card[];
  const mockActivatedRoute = {
    params: of({}),
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerNewSet, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();

    setCard = {
      cardCount: {
        total: 0,
        official: 0,
      },
      cards: [
        {
          id: 'testSetCard',
          localId: '0',
          name: 'Nom de la carte',
          image: 'setImage',
        },
      ],
      id: '0',
      legal: {
        standard: false,
        expanded: false,
      },
      logo: 'setLogo',
      name: 'Nom du set',
      releaseDate: '2025-01-01',
      serie: {
        id: '0',
        name: 'Nom de la série',
        logo: 'serieLogo',
      },
      symbol: 'setSymbol',
    };

    cards = [
      {
        id: '00',
        localId: '0',
        name: 'Nom de la carte',
        image: 'imageCard',
      },
    ]

    fixture = TestBed.createComponent(BannerNewSet);
    component = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.componentRef.setInput('newSet', setCard);
    fixture.componentRef.setInput('bannerCards', cards);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('src name is set logo', () => {
    const img = view.querySelector('img')
    expect(img?.getAttribute('src')).toBe('setLogo.png');
  });
});
