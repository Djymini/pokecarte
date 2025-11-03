import {Product} from '@app/features/products/models/product.model';
import {ProductRules} from '@app/features/products/domain/product.rules';

describe('ProductRules (unit tests)', () => {
  let product: Product;

  // 1. Arrange
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
      discount: 50
    }
  });

  it('should apply discount correctly', () => {
    const truePrice = ProductRules.applyDiscount(product);
    expect(truePrice).toBe(7);
  });

  it('should throw error if discount < 0 or > 100', () => {
    const invalid1 = {...product, discount: 110};
    expect(() => ProductRules.applyDiscount(invalid1)).toThrowError();

    const invalid2 = {...product, discount: -10};
    expect(() => ProductRules.applyDiscount(invalid2)).toThrowError();
  });

  it('should return false if stock is 0', () => {
    const result1 = ProductRules.canBeOrdered({ ...product, stock: 0 });
    expect(result1).toBeFalse();

    const result2 = ProductRules.canBeOrdered(product);
    expect(result2).toBeTrue();
  });
});
