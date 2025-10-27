import {Component, input, output} from '@angular/core';
import {Checkbox} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-filter-checkbox-item',
  imports: [
    Checkbox,
    FormsModule
  ],
  templateUrl: './product-filter-checkbox-item.html',
  styleUrl: './product-filter-checkbox-item.scss',
})
export class ProductFilterCheckboxItem {
  nameCheckbox = input.required<string>();
  isChecked = input.required<boolean>();
  filterChecked = output<string>();
  filterNotChecked = output<string>();

  onToggleCheck(): void {
    if (this.isChecked()) {
      this.filterNotChecked.emit(this.nameCheckbox());
    } else {
      this.filterChecked.emit(this.nameCheckbox());
    }
  }
}
