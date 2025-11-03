import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = signal<boolean>(false);

  start(): void {
    this.isLoading.set(true);
  }

  stop(): void {
    this.isLoading.set(false)
  }
}
