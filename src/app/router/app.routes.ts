import { Routes } from '@angular/router';
import {newSetResolver} from './resolver/home/new-set-resolver';
import {productHypeResolver} from './resolver/home/product-hype-resolver';

export const routes: Routes = [
  {
    path: "",
    title: "Accueil",
    loadComponent: () => import("../features/home/page/home.page"),
    resolve: {newSet: newSetResolver, productsHype: productHypeResolver}
  }
];
