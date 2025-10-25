import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationBestPromotion } from './presentation-best-promotion';

describe('PresentationBestPromotion', () => {
  let component: PresentationBestPromotion;
  let fixture: ComponentFixture<PresentationBestPromotion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationBestPromotion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationBestPromotion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
