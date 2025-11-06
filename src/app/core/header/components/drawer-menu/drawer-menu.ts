import { Component, input, ViewChild } from '@angular/core';
import { Drawer } from 'primeng/drawer';
import { DrawerModule } from 'primeng/drawer';
import { Button } from "primeng/button";
import { RouterLink } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-drawer-menu',
  imports: [DrawerModule, Button, RouterLink],
  templateUrl: './drawer-menu.html',
  styleUrl: './drawer-menu.scss',
})
export class DrawerMenu {
  items = input.required<MenuItem[] | undefined>();
  isAuthenticated = input.required<boolean>();

  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e:any): void {
      this.drawerRef.close(e);
  }

  visible: boolean = false;
}
