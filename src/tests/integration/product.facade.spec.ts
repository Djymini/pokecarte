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
        card: {
          id: "swsh1-1",
          localId: "1",
          name: "Celebi V",
          image: "https://assets.tcgdex.net/fr/swsh/swsh1/1"
        },
        price: 39.99,
        stock: 5,
        discount: 25
      },
      {
        card: {
          id: "swsh12-001",
          localId: "001",
          name: "Mimitoss",
          image: "https://assets.tcgdex.net/fr/swsh/swsh12/001"
        },
        price: 1.49,
        stock: 22,
        discount: 10
      },
      {
        card: {
          id: "swsh11-001",
          localId: "001",
          name: "Mystherbe",
          image: "https://assets.tcgdex.net/fr/swsh/swsh11/001"
        },
        price: 1.29,
        stock: 18,
        discount: 5
      },
      {
        card: {
          id: "swsh2-137",
          localId: "137",
          name: "Pachyradjah VMAX",
          image: "https://assets.tcgdex.net/fr/swsh/swsh2/137"
        },
        price: 5.49,
        stock: 8,
        discount: 0
      },
      {
        card: {
          id: "swsh4.5-SV122",
          localId: "SV122",
          name: "Éthernatos VMAX",
          image: "https://assets.tcgdex.net/fr/swsh/swsh4.5/SV122"
        },
        price: 8.99,
        stock: 6,
        discount: 0
      },
      {
        card: {
          id: "swsh5-1",
          localId: "1",
          name: "Chétiflor",
          image: "https://assets.tcgdex.net/fr/swsh/swsh5/1"
        },
        price: 1.69,
        stock: 12,
        discount: 15
      },
      {
        card: {
          id: "swsh12.5-104",
          localId: "104",
          name: "Duralugon VMAX",
          image: "https://assets.tcgdex.net/fr/swsh/swsh12.5/104"
        },
        price: 6.49,
        stock: 9,
        discount: 0
      },
      {
        card: {
          id: "A2a-001",
          localId: "001",
          name: "Scarhino",
          image: "https://assets.tcgdex.net/fr/tcgp/A2a/001"
        },
        price: 3.99,
        stock: 6,
        discount: 20
      },
      {
        card: {
          id: "A1a-001",
          localId: "001",
          name: "Noeunoeuf",
          image: "https://assets.tcgdex.net/fr/tcgp/A1a/001"
        },
        price: 1.09,
        stock: 25,
        discount: 0
      },
      {
        card: {
          id: "swsh4.5-SV106",
          localId: "SV106",
          name: "Gorythmic VMAX",
          image: "https://assets.tcgdex.net/fr/swsh/swsh4.5/SV106"
        },
        price: 7.99,
        stock: 7,
        discount: 0
      },
      {
        card: {
          id: "swsh2-1",
          localId: "1",
          name: "Chenipan",
          image: "https://assets.tcgdex.net/fr/swsh/swsh2/1"
        },
        price: 1.19,
        stock: 20,
        discount: 5
      },
      {
        card: {
          id: "swsh4.5-SV107",
          localId: "SV107",
          name: "Dracaufeu VMAX",
          image: "https://assets.tcgdex.net/fr/swsh/swsh4.5/SV107"
        },
        price: 59.99,
        stock: 3,
        discount: 0
      },
      {
        card: {
          id: "A3-001",
          localId: "001",
          name: "Noeunoeuf",
          image: "https://assets.tcgdex.net/fr/tcgp/A3/001"
        },
        price: 1.09,
        stock: 19,
        discount: 0
      },
      {
        card: {
          id: "swsh4.5-SV117",
          localId: "SV117",
          name: "Angoliath VMAX",
          image: "https://assets.tcgdex.net/fr/swsh/swsh4.5/SV117"
        },
        price: 6.99,
        stock: 10,
        discount: 0
      },
      {
        card: {
          id: "swshp-SWSH261",
          localId: "SWSH261",
          name: "Dracaufeu VMAX",
          image: "https://assets.tcgdex.net/fr/swsh/swshp/SWSH261"
        },
        price: 42.99,
        stock: 4,
        discount: 0
      },
      {
        card: {
          id: "swshp-SWSH267",
          localId: "SWSH267",
          name: "Deoxys VMAX",
          image: "https://assets.tcgdex.net/fr/swsh/swshp/SWSH267"
        },
        price: 7.49,
        stock: 8,
        discount: 0
      },
      {
        card: {
          id: "swsh4-1",
          localId: "1",
          name: "Aspicot",
          image: "https://assets.tcgdex.net/fr/swsh/swsh4/1"
        },
        price: 1.39,
        stock: 16,
        discount: 10
      },
      {
        card: {
          id: "swsh3-1",
          localId: "1",
          name: "Papilusion V",
          image: "https://assets.tcgdex.net/fr/swsh/swsh3/1"
        },
        price: 9.99,
        stock: 4,
        discount: 30
      },
      {
        card: {
          id: "swsh9-TG29",
          localId: "TG29",
          name: "Shifours Poing Final VMAX",
          image: "https://assets.tcgdex.net/fr/swsh/swsh9/TG29"
        },
        price: 6.79,
        stock: 11,
        discount: 0
      }
    ]

    // 2. Act
    const loadPromise = facade.loadProducts();

    // 3. Assert (API)
    const req = http.expectOne('data/product.json');
    expect(req.request.method).toBe('GET');

    // 4. Simuler la réponse du backend
    req.flush(mockResponse);

    await loadPromise;

    // 5. Assert (Store + résultat)
    const result = store.products;
    expect(result()[0].price).toBe(39.99);
  });
});
