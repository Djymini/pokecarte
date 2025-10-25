import {inject, Injectable} from '@angular/core';
import {HomeApi} from './home.api';
import {HomeStore} from './home.store';
import {SetCardDetail} from '../../products/models/set-detail.model';
import {Product} from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HomeFacade {
  private homeApi = inject(HomeApi);
  private homeStore = inject(HomeStore);

  async getNewSetCard(): Promise<SetCardDetail > {
    if (this.homeStore.newSet().id === "") {
      const newSet = await this.homeApi.getNewSetCard();
      this.homeStore.addNewSet(newSet);
      return newSet;
    }else {
      return this.homeStore.newSet();
    }
  }

  async getProductsHype(): Promise<Product[] > {
    if (this.homeStore.productsHype().length === 0) {
      const products = await this.homeApi.getProductsHype();
      this.homeStore.addProducts(products);
      return products;
    }else {
      return this.homeStore.productsHype();
    }
  }

  async getBestPromotions(): Promise<Product[] > {
    if (this.homeStore.bestPromotion().length === 0) {
      const promotions = await this.homeApi.getPromotion();
      this.homeStore.addPromotions(promotions);
      return promotions;
    }else {
      return this.homeStore.bestPromotion();
    }
  }
}
