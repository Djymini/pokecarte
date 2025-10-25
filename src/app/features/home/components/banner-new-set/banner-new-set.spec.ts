import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNewSet } from './banner-new-set';

describe('BannerNewSet', () => {
  let component: BannerNewSet;
  let fixture: ComponentFixture<BannerNewSet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerNewSet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerNewSet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
