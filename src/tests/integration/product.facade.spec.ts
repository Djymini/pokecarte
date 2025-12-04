import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {provideHttpClient} from '@angular/common/http';
import {provideZonelessChangeDetection} from '@angular/core';
import { ProductFacade } from '@app/features/products/services/product.facade';
import { ProductStore } from '@app/features/products/services/product.store';
import { ProductApi } from '@app/features/products/services/product.api';

describe('ProductFacade.createProduct (integration)', () => {
  let facade: ProductFacade;
  let http: HttpTestingController;
  let store: ProductStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection(),
        ProductFacade,
        ProductApi,
        ProductStore], // Client HTTP & Services DI
    });

    facade = TestBed.inject(ProductFacade);         // Facade sous test
    http = TestBed.inject(HttpTestingController);   // Contrôleur HTTP mock
    store = TestBed.inject(ProductStore);           // Store réel (signal)
  });

  // 🧪 Test d'intégration
  it('should call API, update store and return product', async () => {
    // 1. Arrange
    const mockResponse = [
      {
        id: 'swsh1-1',
        name: 'Celebi V',
        image: 'https://assets.tcgdex.net/fr/swsh/swsh1/1/high.webp',
        category: 'Pokemon',
        illustrator: 'PLANETA Igarashi',
        rarity: 'Holo Rare V',
        hp: 180,
        description: null,
        stage: 'De base',
        retreat: 1,
        price: 2.27,
        stock: 37,
        discount: 0.0,
        setId: 'swsh1',
        types: [],
        weakness: [],
        resistances: [],
      },
      {
        id: 'swsh3-1',
        name: 'Papilusion V',
        image: 'https://assets.tcgdex.net/fr/swsh/swsh3/1/high.webp',
        category: 'Pokemon',
        illustrator: 'Saki Hayashiro',
        rarity: 'Holo Rare V',
        hp: 190,
        description: null,
        stage: 'De base',
        retreat: 1,
        price: 1.46,
        stock: 75,
        discount: 0.0,
        setId: 'swsh3',
        types: [],
        weakness: [],
        resistances: [],
      },
      {
        id: 'swsh3-136',
        name: 'Fouinar',
        image: 'https://assets.tcgdex.net/fr/swsh/swsh3/136/high.webp',
        category: 'Pokemon',
        illustrator: 'tetsuya koizumi',
        rarity: 'Peu Commune',
        hp: 110,
        description: null,
        stage: 'Niveau 1',
        retreat: 1,
        price: 0.11,
        stock: 50,
        discount: 0.0,
        setId: 'swsh3',
        types: [],
        weakness: [],
        resistances: [],
      },
      {
        id: 'swsh4.5-SV106',
        name: 'Gorythmic VMAX',
        image: 'https://assets.tcgdex.net/fr/swsh/swsh4.5/SV106/high.webp',
        category: 'Pokemon',
        illustrator: '5ban Graphics',
        rarity: 'Shiny rare VMAX',
        hp: 330,
        description: null,
        stage: 'ESCOUADE',
        retreat: 3,
        price: 2.44,
        stock: 20,
        discount: 0.0,
        setId: 'swsh4.5',
        types: [],
        weakness: [],
        resistances: [],
      },
      {
        id: 'swsh4.5-SV107',
        name: 'Dracaufeu VMAX',
        image: 'https://assets.tcgdex.net/fr/swsh/swsh4.5/SV107/high.webp',
        category: 'Pokemon',
        illustrator: 'aky CG Works',
        rarity: 'Shiny rare VMAX',
        hp: 330,
        description: null,
        stage: 'ESCOUADE',
        retreat: 3,
        price: 154.11,
        stock: 5,
        discount: 50.0,
        setId: 'swsh4.5',
        types: [],
        weakness: [],
        resistances: [],
      },
    ];

    // 2. Act
    const loadPromise = facade.loadProducts();

    // 3. Assert (API)
    const req = http.expectOne('/products');
    expect(req.request.method).toBe('GET');

    // 4. Simuler la réponse du backend
    req.flush(mockResponse);

    await loadPromise;

    // 5. Assert (Store + résultat)
    const result = store.products;
    expect(result()[0].price).toBe(2.27);
  });
});
