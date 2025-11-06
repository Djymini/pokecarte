import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ProductFilterSearch } from "../product-filter-search/product-filter-search";
import { ProductFilterCheckbox } from "../product-filter-checkbox/product-filter-checkbox";

@Component({
  selector: 'app-product-filter-drawer',
  imports: [DrawerModule, ButtonModule, AvatarModule, ProductFilterSearch, ProductFilterCheckbox],
  templateUrl: './product-filter-drawer.html',
  styleUrl: './product-filter-drawer.scss',
})
export class ProductFilterDrawer {
  visible: boolean = false;

  clearFilter(): void {
    console.log('clear filter');
  }
}
