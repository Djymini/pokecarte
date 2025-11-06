import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {NavbarItem} from '../../models/navbar-item.model';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderSearchbar} from '../header-searchbar/header-searchbar';
import {CartButton} from '../cart-button/cart-button';
import {AuthService} from '../../../../features/auth/services/auth.service';
import {UserButton} from '../user-button/user-button';
import {NAME_APP} from '../../../../shared/utilis/constants';
import { Button } from "primeng/button";
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DrawerMenu } from "../drawer-menu/drawer-menu";

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderSearchbar,
    CartButton,
    UserButton,
    Button,
    Menu,
    DrawerMenu
],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  authService = inject(AuthService);
  isAuthenticated = this.authService.isAuthenticated;

  nameApp: string = NAME_APP;

  items: MenuItem[] | undefined;

  navbarItems: NavbarItem[] = [
    {name: "Accueil", link: "/"},
    {name: "Nos produits", link: "/products"},
    {name: "A propos", link: "/about"},
    {name: "Support", link: "/support"}
  ];

  ngOnInit(): void {
    this.items = [
      {
          label: 'Accueil',
          url: "/"
      },
      {
          label: 'Nos produits',
          url: "/products"
      },
      {
          label: 'A propos',
          url: "/about"
      },
      {
          label: 'Support',
          url: "/support"
      },
      {
          label: 'Connexion',
          url: "/login"
      }
    ];
  }
}
