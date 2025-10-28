import {FormControl} from '@angular/forms';

export type ProductFormModel = {
  name: FormControl<string>;
  price: FormControl<number>;
  stock: FormControl<number>;
  discount: FormControl<number>;
}
