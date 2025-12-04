import {Component, computed, inject} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Product} from '../../../products/models/product.model';
import {ProductFormModel} from '../../models/product-form.model';
import {CardFacade} from '../../../card/services/card.facade';
import {CardStore} from '../../../card/services/card.store';
import {ProductFacade} from '../../../products/services/product.facade';
import {NgOptimizedImage} from '@angular/common';
import {Toast} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {ButtonLabel} from 'primeng/button';

@Component({
  selector: 'app-product-form',
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage,
    Toast,
    ButtonLabel
  ],
  providers: [MessageService],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
})
export class ProductForm {
  private formBuilder = inject(NonNullableFormBuilder);
  private cardStore = inject(CardStore);
  private productFacade = inject(ProductFacade);
  private cardFacade = inject(CardFacade);
  private messageService = inject(MessageService);

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
        id: 'test',
        name: 'test',
        image: 'test',
        category: 'test',
        illustrator: 'test',
        rarity: 'test',
        hp: 100,
        description: 'test',
        setId: "test",
        stage: 'test',
        retreat: 1,
        price: this.productForm.getRawValue().price,
        stock: this.productForm.getRawValue().stock,
        discount: this.productForm.getRawValue().discount,
        types: [],
        weakness: [],
        resistances: [],
      };
      this.productFacade.addProduct(newProduct);
      this.messageService.add({ severity: 'success', summary: 'Info', detail: `la carte ${newProduct.name} a été ajouté aux produits`, life: 3000 });
    }
  }
}
