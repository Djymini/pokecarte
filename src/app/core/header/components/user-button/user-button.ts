import {Component, inject, OnInit} from '@angular/core';
import {MenuItem, MessageService, PrimeTemplate} from 'primeng/api';
import {Router} from '@angular/router';
import {SpeedDial} from 'primeng/speeddial';
import {Button} from 'primeng/button';
import {AuthService} from '../../../../features/auth/services/auth.service';

@Component({
  selector: 'app-user-button',
  imports: [
    SpeedDial,
    Button,
    PrimeTemplate
  ],
  providers: [MessageService],
  templateUrl: './user-button.html',
  styleUrl: './user-button.scss',
})
export class UserButton implements OnInit {
  items: MenuItem[] = [];
  authService = inject(AuthService);
  user = this.authService.currentUser();

  constructor(
    private messageService: MessageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Compte',
        icon: 'pi pi-user',
        command: () => {
          this.router.navigate(['/']);
        },
      },
      {
        label: 'Deconnexion',
        icon: 'pi pi-sign-out',
        command: () => {
          this.authService.logout();
          this.router.navigate(['/']);
        },
      },
    ];

    if (this.user?.role === 'ADMIN'){
      this.items[0] = {
        label: 'Admin',
        icon: 'pi pi-user',
        command: () => {
          this.router.navigate(['/admin']);
        },
      }
    }
  }
}
