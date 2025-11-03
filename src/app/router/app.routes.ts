import { Routes } from '@angular/router';
import {newSetResolver} from './resolver/home/new-set-resolver';
import {productHypeResolver} from './resolver/home/product-hype-resolver';
import {bestPromotionResolver} from './resolver/home/best-promotion-resolver';
import {productsListResolver} from './resolver/products/products-list-resolver';
import {adminGuard} from './guards/admin-guard';
import {productDetailResolver} from './resolver/products/product-detail-resolver';

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
    resolve: {preload: productsListResolver},
  },

  {
    path: "product-detail/:id",
    title: "Detail",
    loadComponent: () => import("../features/products/page/product-detail.page"),
    resolve: {detail: productDetailResolver}
  },
  {
    path: "login",
    title: "Connexion",
    loadComponent: () => import("../features/auth/page/login.page")
  },
  {
    path: "register",
    title: "S'inscrire",
    loadComponent: () => import("../features/auth/page/register.page")
  },
  {
    path: "cart",
    title: "Mon panier",
    loadComponent: () => import("../features/cart/page/cart.page")
  },
  {
    path: "admin",
    title: "Administration",
    loadComponent: () => import("../features/admin/page/admin.page"),
    canActivate: [adminGuard],
  },
  {
    path: 'error',
    title: "Error",
    loadComponent: () => import('../features/error/page/error.page')
  },
  {path: '**', redirectTo: 'error' }
];
