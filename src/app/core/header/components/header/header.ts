import {Component, computed, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CartButton} from '../cart-button/cart-button';
import {AuthService} from '../../../../features/auth/services/auth.service';
import {UserButton} from '../user-button/user-button';
import {ABOUT_TITLE, APP_NAME, HOME_TITLE, LOGIN_TITLE, PRODUCTS_TITLE, SUPPORT_TITLE} from '../../../../shared/utilis/constants';

import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    CartButton,
    UserButton,
    MegaMenu,
    ButtonModule,
    CommonModule
],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  authService = inject(AuthService);
  isAuthenticated = this.authService.isAuthenticated;

  meagaMenuItemArrayAuthenticate: MegaMenuItem[] = [
    {
      label: HOME_TITLE,
      root: true,
      url: "/"
    },
    {
      label: PRODUCTS_TITLE,
      root: true,
      url: "/products"
    },
    {
      label: ABOUT_TITLE,
      root: true,
      url: "/about"
    },
    {
      label: SUPPORT_TITLE,
      root: true,
      url: "/support"
    }
  ];

  meagaMenuItemArray: MegaMenuItem[] = [
    {
      label: HOME_TITLE,
      root: true,
      url: "/"
    },
    {
      label: PRODUCTS_TITLE,
      root: true,
      url: "/products"
    },
    {
      label: ABOUT_TITLE,
      root: true,
      url: "/about"
    },
    {
      label: SUPPORT_TITLE,
      root: true,
      url: "/support"
    },
    {
      label: LOGIN_TITLE,
      root: true,
      url: "/login"
    }
  ];

  items = computed(() => {
    if(this.isAuthenticated()){
      return this.meagaMenuItemArrayAuthenticate;
    }else{
      return this.meagaMenuItemArray;
    }
  })

  nameApp: string = APP_NAME;
}
