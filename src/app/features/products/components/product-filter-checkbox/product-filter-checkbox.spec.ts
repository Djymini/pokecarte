import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterCheckbox } from './product-filter-checkbox';

describe('ProductFilterCheckbox', () => {
  let component: ProductFilterCheckbox;
  let fixture: ComponentFixture<ProductFilterCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFilterCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFilterCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
