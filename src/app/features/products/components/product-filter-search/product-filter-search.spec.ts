import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterSearch } from './product-filter-search';

describe('ProductFilterSearch', () => {
  let component: ProductFilterSearch;
  let fixture: ComponentFixture<ProductFilterSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFilterSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFilterSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
