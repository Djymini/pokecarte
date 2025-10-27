import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterCheckboxItem } from './product-filter-checkbox-item';

describe('ProductFilterCheckboxItem', () => {
  let component: ProductFilterCheckboxItem;
  let fixture: ComponentFixture<ProductFilterCheckboxItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFilterCheckboxItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFilterCheckboxItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
