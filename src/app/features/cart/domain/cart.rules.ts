import {Product} from '../../products/models/product.model';

export class CartRules {
  static validateAddProduct(product: Product): void {
    if (product.price < 0) throw new Error(product.name + ': Prix du produit négatif');
    if (product.discount < 0) throw new Error(product.name + ': Discount est negatif');
    if (product.stock < 1) throw new Error(product.name + ': Stock insuffisant');
  }
}
