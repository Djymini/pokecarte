import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserButton } from '@app/core/header/components/user-button/user-button';
import {provideZonelessChangeDetection} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UserButton', () => {
  let component: UserButton;
  let fixture: ComponentFixture<UserButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserButton, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
