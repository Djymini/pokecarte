import {Product} from '@app/features/products/models/product.model';
import {ProductRules} from '@app/features/products/domain/product.rules';

describe('ProductRules (unit tests)', () => {
  let product: Product;

  // 1. Arrange
  beforeEach(() => {
    product = {
      id: 'swsh1-1',
      name: 'Celebi V',
      image: 'https://assets.tcgdex.net/fr/swsh/swsh1/1/high.webp',
      category: 'Pokemon',
      illustrator: 'PLANETA Igarashi',
      rarity: 'Holo Rare V',
      hp: 180,
      description: '',
      stage: 'De base',
      retreat: 1,
      price: 2.27,
      stock: 37,
      discount: 0.0,
      setId: 'swsh1',
      types: [],
      weakness: [],
      resistances: [],
    };
  });

  it('should apply discount correctly', () => {
    const truePrice = ProductRules.applyDiscount(product);
    expect(truePrice).toBe(2.27);
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
