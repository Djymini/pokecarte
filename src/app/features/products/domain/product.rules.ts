import {Product} from '../models/product.model';

export class ProductRules {
  static applyDiscount(product: Product): number {
    if (product.discount < 0 || product.discount > 100) {
      throw new Error('Discount must be between 0 and 100');
    }
    return (product.price - (product.discount * 0.01 * product.price));
  }

  static canBeOrdered(product: Product): boolean {
    return product.stock > 0 && this.applyDiscount(product) >= 0;
  }
}
