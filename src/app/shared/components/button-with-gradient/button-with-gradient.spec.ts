import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithGradient } from './button-with-gradient';

describe('ButtonWithGradient', () => {
  let component: ButtonWithGradient;
  let fixture: ComponentFixture<ButtonWithGradient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWithGradient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWithGradient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
