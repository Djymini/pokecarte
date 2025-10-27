import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterCheckboxList } from './product-filter-checkbox-list';

describe('ProductFilterCheckboxList', () => {
  let component: ProductFilterCheckboxList;
  let fixture: ComponentFixture<ProductFilterCheckboxList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFilterCheckboxList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFilterCheckboxList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
