import {Component, signal} from '@angular/core';
import {ProductFilterCheckboxList} from '../product-filter-checkbox-list/product-filter-checkbox-list';

@Component({
  selector: 'app-product-filter-checkbox',
  imports: [
    ProductFilterCheckboxList
  ],
  templateUrl: './product-filter-checkbox.html',
  styleUrl: './product-filter-checkbox.scss',
})
export class ProductFilterCheckbox {
  titleSection: string = 'Catégorie';
  nameFilter: string = 'Filtre par set';
  arrayCheckboxNames: string[] = ["xyp", "swsh1", "swsh12", "swsh11", "swsh2", "swsh4.5", "swsh12.5", "A2a", "A1a", "A3", "swshp", "swsh4", "swsh3", "swsh9"];
  arrayFilter = signal<string[]>([]);
}
