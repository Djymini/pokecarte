import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchbar } from '@app/core/header/components/header-searchbar/header-searchbar';
import {provideZonelessChangeDetection} from '@angular/core';

describe('HeaderSearchbar', () => {
  let component: HeaderSearchbar;
  let fixture: ComponentFixture<HeaderSearchbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSearchbar],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSearchbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
