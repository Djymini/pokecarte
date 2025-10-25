import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockIndicator } from './stock-indicator';

describe('StockIndicator', () => {
  let component: StockIndicator;
  let fixture: ComponentFixture<StockIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockIndicator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockIndicator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
