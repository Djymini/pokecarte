import {Product} from '@app/features/products/models/product.model';
import {CartRules} from '@app/features/cart/domain/cart.rules';

describe('CartRule (unit tests)', () => {
  let product: Product;

  beforeEach(() => {
    product = {
      card: {
        id: "xyp-XY99",
        localId: "XY99",
        name: "Lien Spirituel Ptéra",
        image: "https://assets.tcgdex.net/fr/xy/xyp/XY99"
      },
      price: 12.00,
      stock: 15,
      discount: 0
    }
  });

  it('should throw error if price < 0', () => {
    const invalid = { ...product, price: -5 };
    expect(() => CartRules.validateAddProduct(invalid)).toThrowError();
  });

  it('should throw error if discount < 0', () => {
    const invalid = { ...product, discount: -10 };
    expect(() => CartRules.validateAddProduct(invalid)).toThrowError();
  });

  it('should throw error if stock < 0', () => {
    const invalid = { ...product, stock: 0 };
    expect(() => CartRules.validateAddProduct(invalid)).toThrowError();
  });
});
