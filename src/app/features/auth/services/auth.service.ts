import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {AuthResponse} from '../models/auth-response.model';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  private currentUserSignal = signal<User | null>(null);
  private isAuthenticatedSignal = signal<boolean>(true);

  currentUser = computed(() => this.currentUserSignal());
  isAuthenticated = computed(() => this.isAuthenticatedSignal());

  async login(): Promise<void> {
    const response = await firstValueFrom(
      this.http.get<AuthResponse>('https://jsonplaceholder.typicode.com/users/1')
    );
    this.handleSuccessfulLogin(response);
  }

  async logout(): Promise<void> {
    //await firstValueFrom(this.http.post('/api/auth/logout', {}));
    this.handleLogout();
  }

  private handleSuccessfulLogin(response: AuthResponse): void {
    localStorage.setItem('token', response.email);
    this.currentUserSignal.set(response);
    this.isAuthenticatedSignal.set(true);
    console.log(this.currentUserSignal())
  }

  private handleLogout(): void {
    localStorage.removeItem('token');
    this.currentUserSignal.set(null);
    this.isAuthenticatedSignal.set(false);
  }
}
