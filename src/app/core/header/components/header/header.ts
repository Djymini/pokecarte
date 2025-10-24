import {Component, computed, inject, signal} from '@angular/core';
import {NavbarItem} from '../../models/navbar-item.model';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderSearchbar} from '../header-searchbar/header-searchbar';
import {CartButton} from '../cart-button/cart-button';
import {AuthService} from '../../../../features/auth/services/auth.service';
import {UserButton} from '../user-button/user-button';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderSearchbar,
    CartButton,
    UserButton
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  authService = inject(AuthService);
  isAuthenticated = this.authService.isAuthenticated;

  nameApp: string = "Pokécarte";
  navbarItems: NavbarItem[] = [
    {name: "Accueil", link: "/"},
    {name: "Nos produits", link: "/products"},
    {name: "A propos", link: "/about"},
    {name: "Support", link: "/support"},
    {name: "Connexion", link: "/login"},
  ];
}
