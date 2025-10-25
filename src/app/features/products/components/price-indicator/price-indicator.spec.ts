import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceIndicator } from './price-indicator';

describe('PriceIndicator', () => {
  let component: PriceIndicator;
  let fixture: ComponentFixture<PriceIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceIndicator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceIndicator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
