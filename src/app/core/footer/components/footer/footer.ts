import { Component } from '@angular/core';
import {NAME_APP} from '../../../../shared/utilis/constants';
import {FooterListLinkItem} from '../../models/list-link.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  nameApp:string = NAME_APP;

  socialNetworks:FooterListLinkItem[] = [
    {icon: 'pi pi-instagram', link: 'https://www.instagram.com/'},
    {icon: 'pi pi-facebook', link: 'https://www.facebook.com/'},
  ];

  appPages:FooterListLinkItem[] = [
    {name: "Accueil", link:"/"},
    {name: "A propos", link:"/about"},
    {name: "CGU", link:"/cgu"},
  ]
}
