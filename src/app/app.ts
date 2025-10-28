import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNG} from 'primeng/config';
import {Header} from './core/header/components/header/header';
import {Footer} from './core/footer/components/footer/footer';
import {ErrorMessage} from './shared/components/error/error-message/error-message';
import {Loader} from './shared/components/loader/loader';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ErrorMessage, RouterOutlet, Loader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('pokecarte');

  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
