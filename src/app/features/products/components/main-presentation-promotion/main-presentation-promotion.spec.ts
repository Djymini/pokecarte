import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPresentationPromotion } from './main-presentation-promotion';

describe('MainPresentationPromotion', () => {
  let component: MainPresentationPromotion;
  let fixture: ComponentFixture<MainPresentationPromotion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPresentationPromotion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPresentationPromotion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
