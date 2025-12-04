import { Component } from '@angular/core';
import {ABOUT_TITLE, APP_NAME, CGU_TITLE, COOKIE_INFO_TITLE, HELP_TITLE, INFO_TITLE, LEGAL_NOTICE_TITLE, LOGIN_TITLE, ORDER_TITLE, PRODUCTS_TITLE, SALE_INFO_TITLE, SUPPORT_TITLE, USER_DASHBOARD_TITLE, USER_TITLE} from '../../../../shared/utilis/constants';
import {FooterListLinkItem} from '../../models/list-link.model';
import {RouterLink} from '@angular/router';
import { NgOptimizedImage } from "@angular/common";
import { FooterItem } from '../models/footer-item.model';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    NgOptimizedImage
],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  appName:string = APP_NAME;

  footerItems: FooterItem[] = [
    {
      title: USER_TITLE,
      links: [
        {name: USER_DASHBOARD_TITLE, url:"/"},
        {name: ORDER_TITLE, url:"/"},
        {name: LOGIN_TITLE, url:"/"}
      ]
    },
    {
      title: HELP_TITLE,
      links: [
        {name: SUPPORT_TITLE, url:"/"},
        {name: ABOUT_TITLE, url:"/"},
      ]
    },
    {
      title: INFO_TITLE,
      links: [
        {name: SALE_INFO_TITLE, url:"/"},
        {name: CGU_TITLE, url:"/"},
        {name: LEGAL_NOTICE_TITLE, url:"/"},
        {name: COOKIE_INFO_TITLE, url:"/"}
      ]
    }
  ]


  socialNetworks:FooterListLinkItem[] = [
    {icon: 'pi pi-instagram', link: 'https://www.instagram.com/', name: 'Instagram link'},
    {icon: 'pi pi-facebook', link: 'https://www.facebook.com/', name: 'Facebook link'},
  ];
}
