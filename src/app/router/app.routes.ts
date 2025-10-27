import { Routes } from '@angular/router';
import {newSetResolver} from './resolver/home/new-set-resolver';
import {productHypeResolver} from './resolver/home/product-hype-resolver';
import {bestPromotionResolver} from './resolver/home/best-promotion-resolver';
import {productsListResolver} from './resolver/products/products-list-resolver';

export const routes: Routes = [
  {
    path: "",
    title: "Accueil",
    loadComponent: () => import("../features/home/page/home.page"),
    resolve: {newSet: newSetResolver, productsHype: productHypeResolver, bestPromotion: bestPromotionResolver}
  },
  {
    path: "products",
    title: "Nos produits",
    loadComponent: () => import("../features/products/page/products.page"),
    resolve: {preload: productsListResolver}
  }
];
