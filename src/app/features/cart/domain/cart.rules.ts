import {Product} from '../../products/models/product.model';

export class CartRules {
  static validate(product: Product): void {
    if (product.stock < 1) throw new Error('Stock insuffisant');
  }
}
