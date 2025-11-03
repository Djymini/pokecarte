import {Component, inject, input} from '@angular/core';
import {ProductCard} from '../product-card/product-card';
import {Product} from '../../models/product.model';
import {ProductStore} from '../../services/product.store';
import {MessageService} from 'primeng/api';
import {NgOptimizedImage} from '@angular/common';
import {Toast} from 'primeng/toast';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  productStore = inject(ProductStore);
  private messageService = inject(MessageService);

  productList = this.productStore.productsFilter;
  product: Product|null = null;

  onProductAddedToCart(product: Product): void {
    this.product = product;
    this.messageService.add({ key: 'confirm', sticky: true, severity: 'success'});
  }


}
