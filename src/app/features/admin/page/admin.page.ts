import {Component, inject} from '@angular/core';
import {ProductForm} from '../components/product-form/product-form';
import {LoadingService} from '../../../core/services/loading.service';

@Component({
  selector: 'app-admin.page',
  imports: [
    ProductForm
  ],
  template: `
    <app-product-form></app-product-form>
  `,
  styles: ``,
})
export default class AdminPage {

}
