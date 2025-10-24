import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from '@app/core/footer/components/footer/footer';
import {of} from 'rxjs';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;
  const mockActivatedRoute = {
    params: of({}),
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
