import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {AuthResponse} from '../models/auth-response.model';
import {User} from '../models/user.model';
import {LoginDto} from '../dto/login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  private currentUserSignal = signal<User | null>(null);
  private isAuthenticatedSignal = signal<boolean>(false);

  currentUser = computed(() => this.currentUserSignal());
  isAuthenticated = computed(() => this.isAuthenticatedSignal());

  async login(credential: LoginDto): Promise<void> {
    let response: AuthResponse;
    if(credential.email === "admin@test.com"){
      response = await firstValueFrom(this.http.get<AuthResponse>("data/user-admin.json"));
    }else {
      response = await firstValueFrom(this.http.get<AuthResponse>("data/user-lambda.json"));
    }
    this.handleSuccessfulLogin(response);
  }

  async logout(): Promise<void> {
    //await firstValueFrom(this.http.post('/api/auth/logout', {}));
    this.handleLogout();
  }

  private handleSuccessfulLogin(response: AuthResponse): void {
    localStorage.setItem('token', response.token);
    this.currentUserSignal.set(response);
    this.isAuthenticatedSignal.set(true);
  }

  private handleLogout(): void {
    localStorage.removeItem('token');
    this.currentUserSignal.set(null);
    this.isAuthenticatedSignal.set(false);
  }
}
