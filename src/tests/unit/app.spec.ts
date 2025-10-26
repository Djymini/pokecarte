import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from '@app/app';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('App', () => {
  const mockActivatedRoute = {
    params: of({}),         // ou { id: 123 } si tu attends un id
    queryParams: of({}),
    snapshot: { paramMap: new Map() },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection(), {provide: ActivatedRoute, useValue: mockActivatedRoute}],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Pokécarte');
  });
});
