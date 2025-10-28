import {Component, computed, inject} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Product} from '../../../products/models/product.model';
import {ProductStore} from '../../../products/services/product.store';
import {ProductFormModel} from '../../models/product-form.model';
import {CardFacade} from '../../../card/services/card.facade';
import {CardStore} from '../../../card/services/card.store';
import {ProductFacade} from '../../../products/services/product.facade';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product-form',
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
})
export class ProductForm {
  private formBuilder = inject(NonNullableFormBuilder);
  private cardStore = inject(CardStore);
  private productFacade = inject(ProductFacade);
  private cardFacade = inject(CardFacade);

  cardInfo = computed(()=> this.cardStore.newCard());

  productForm: FormGroup<ProductFormModel> = this.formBuilder.group({
    name: this.formBuilder.control('', Validators.required),
    price: this.formBuilder.control(0, Validators.required),
    stock: this.formBuilder.control(0, Validators.required),
    discount: this.formBuilder.control(0, Validators.required)
  });

  onKeyUp = (event: any) => {
    setTimeout(() => {
      this.cardFacade.loadCardByName(event.target.value);
    }, 500);
  }

  onSubmit() {
    if(this.cardInfo() !== null){
      const newProduct: Product = {
        card: this.cardInfo()!,
        price: this.productForm.getRawValue().price,
        stock: this.productForm.getRawValue().stock,
        discount: this.productForm.getRawValue().discount
      }
      this.productFacade.addProduct(newProduct);
    }
  }
}
