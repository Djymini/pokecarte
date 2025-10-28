import {inject, Injectable} from '@angular/core';
import {ProductApi} from './product.api';
import {ProductStore} from './product.store';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {
  productApi = inject(ProductApi);
  productStore = inject(ProductStore);

  async loadProducts(){
    await  this.productApi.getProduct();
    const newProductList = await this.productApi.getProduct();
    this.productStore.updateProducts(newProductList);
  }

  addProduct(product: Product){
    this.productStore.addProduct(product);
  }

  updateQuery(newQuery:string){
    this.productStore.updateQuery(newQuery);
  }

  addSetFilter(newSetFilter:string){
    this.productStore.addSetFilter(newSetFilter);
  }

  removeSetFilter(newSetFilter:string){
    this.productStore.removeSetFilter(newSetFilter);
  }
}
