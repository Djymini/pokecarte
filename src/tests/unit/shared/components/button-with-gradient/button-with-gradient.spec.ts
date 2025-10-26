import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithGradient } from '@app/shared/components/button-with-gradient/button-with-gradient';
import {provideZonelessChangeDetection} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';

describe('ButtonWithGradient', () => {
  let component: ButtonWithGradient;
  let fixture: ComponentFixture<ButtonWithGradient>;
  let view:  HTMLElement;
  const mockActivatedRoute = {
    params: of({}),
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWithGradient, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWithGradient);
    component = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.componentRef.setInput('nameButton', "test");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name button is input', () => {
    const span = view.querySelector('span')
    expect(span?.innerHTML).toBe('test');
  });
});
