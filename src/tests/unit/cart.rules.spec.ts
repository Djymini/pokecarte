import {Product} from '@app/features/products/models/product.model';
import {CartRules} from '@app/features/cart/domain/cart.rules';

describe('CartRule (unit tests)', () => {
  let product: Product;

  beforeEach(() => {
    product = {
      id: 'swsh1-1',
      name: 'Celebi V',
      image: 'https://assets.tcgdex.net/fr/swsh/swsh1/1/high.webp',
      category: 'Pokemon',
      illustrator: 'PLANETA Igarashi',
      rarity: 'Holo Rare V',
      hp: 180,
      description: "",
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
