import { Component } from '@angular/core';
import {ProductForm} from '../components/product-form/product-form';

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
