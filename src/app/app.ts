import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNG} from 'primeng/config';
import {Header} from './core/header/components/header/header';
import {Footer} from './core/footer/components/footer/footer';
import {ErrorMessage} from './shared/components/error/error-message/error-message';
import {Loader} from './shared/components/loader/loader';
import {LoadingService} from './core/services/loading.service';
import {PopupCart} from './features/cart/components/popup-cart/popup-cart';
import {CartStore} from './features/cart/services/cart.store';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ErrorMessage, RouterOutlet, Loader, PopupCart],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('pokecarte');

  constructor(private primeng: PrimeNG) {}

  isLoading = inject(LoadingService).isLoading();
  isPopupCartIsVisible = inject(CartStore).isPopupVisible;

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
