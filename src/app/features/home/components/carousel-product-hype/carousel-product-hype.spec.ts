import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselProductHype } from './carousel-product-hype';

describe('CarouselProductHype', () => {
  let component: CarouselProductHype;
  let fixture: ComponentFixture<CarouselProductHype>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselProductHype]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselProductHype);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
