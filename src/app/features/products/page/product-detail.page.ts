import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductStore} from '../services/product.store';
import {Product} from '../models/product.model';
import {CardDetail} from '../../card/models/card-detail.model';
import {Card} from '../../card/components/card/card';
import {PriceIndicator} from '../components/price-indicator/price-indicator';
import {CartFacade} from '../../cart/services/cart.facade';

@Component({
  selector: 'app-product-detail.page',
  imports: [
    Card,
    PriceIndicator
  ],
  template: `
    <div class="container">
      <div class="details">
        @if (product !== undefined) {
          <app-price-indicator [price]="product.price" [discount]="product.discount"></app-price-indicator>
        }
        <h2>{{ detail?.name }}</h2>
        <div class="stats">
          <span class="stat-badge">PV : {{ detail?.hp }}</span>
          <span class="stat-badge stat-type">{{ detail?.types }}</span>
        </div>

        @for (attack of detail?.attacks; track $index) {
          <div class="attack">
            <h3>{{ attack.name }}</h3>
            <p>
              @for (cost of attack.cost; track $index) {
                <span>{{ cost }} </span>
              }
            </p>
            <p>{{ attack.effect }}</p>
            <p class="damage">Dégâts : {{ attack.damage }}</p>
          </div>
        }

        <div class="extras">
          <p><strong>Faiblesse :</strong>
            @for (weakness of detail?.weaknesses; track $index) {
              <span>{{ weakness.type }} {{ weakness.value }}</span>
            }
            | <strong>Résistance :</strong>
            @for (resistence of detail?.resistances; track $index) {
              <span>{{ resistence.type }} {{ resistence.value }}</span>
            }
            | <strong>Coût de Retraite :</strong>
            @for (i of [].constructor(detail?.retreat); track i) {
              <span>★</span>
            }
          </p>
        </div>
        <button class="add-cart-button" (click)="addToCart()">
          Ajouter au panier
        </button>
      </div>

      <div class="card-image">
        @if (product !== undefined) {
          <app-card [cardImage]="product.card.image" [cardName]="product.card.name" [width]="'388'"
                    [height]="'590'" [id]="product.card.id"></app-card>
        }
      </div>
    </div>
  `,
  styles: `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Roboto, Arial, sans-serif;
      background-color: #f8f9fb;
      color: #333;
      line-height: 1.6;
    }

    /* ----- CONTAINER PRINCIPAL ----- */
    .container {
      max-width: 1200px;
      margin: 50px auto;
      padding: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      background-color: #fff;
      border-radius: 20px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    /* ----- IMAGE DE LA CARTE ----- */
    .card-image {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-image img {
      width: 100%;
      max-width: 400px;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card-image img:hover {
      transform: scale(1.03);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
    }

    /* ----- SECTION DÉTAILS ----- */
    .details {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .details h1 {
      font-size: 2.2rem;
      font-weight: 700;
      color: #111;
      margin-bottom: 10px;
    }

    .stats {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
    }

    .stat-badge {
      background-color: #f3f3f3;
      border-radius: 12px;
      padding: 6px 14px;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .stat-type {
      background-color: #ffe0b2;
      color: #d35400;
    }

    .description {
      margin-bottom: 30px;
      font-size: 1rem;
      color: #555;
    }

    /* ----- ATTAQUES ----- */
    .attack {
      margin-bottom: 20px;
      padding: 15px;
      background-color: #fafafa;
      border: 1px solid #e3e3e3;
      border-radius: 12px;
    }

    .attack h3 {
      font-size: 1.1rem;
      color: #222;
      margin-bottom: 5px;
    }

    .attack p {
      font-size: 0.9rem;
      color: #555;
    }

    .attack .damage {
      font-weight: 600;
      margin-top: 5px;
      color: #000;
    }

    /* ----- INFORMATIONS SUPPLÉMENTAIRES ----- */
    .extras {
      margin-top: 20px;
      font-size: 0.9rem;
      color: #666;
    }

    .extras strong {
      color: #333;
    }

    /* ----- BOUTON ----- */
    .button {
      display: inline-block;
      background-color: #4f46e5;
      color: #fff;
      padding: 12px 25px;
      border: none;
      border-radius: 10px;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      transition: background 0.3s ease;
      margin-top: 30px;
    }

    .button:hover {
      background-color: #3730a3;
    }

    .artist {
      margin-top: 15px;
      font-size: 0.85rem;
      color: #888;
    }

    .add-cart-button {
      width: 100%;
      padding: 8px 16px;
      border: none;
      border-radius: 7px;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 1px;
      color: #fff;
      background-color: var(--accent);
      cursor: pointer;

      &:active {
        transform: scale(0.97);
      }
    }

    .add-cart-button:hover{
      cursor: pointer;
    }

    /* ----- RESPONSIVE ----- */
    @media (max-width: 900px) {
      .container {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .details {
        align-items: center;
      }
    }
  `,
})
export default class ProductDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private productStore = inject(ProductStore);
  private cartFacade = inject(CartFacade);
  id = "";
  product: Product | undefined = undefined;
  detail: CardDetail | null = null;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    console.log(this.id);
    this.product = this.productStore.products().find((element) => element.card.id === this.id);
    this.detail = this.route.snapshot.data['detail'];

    console.log(this.detail);
    console.log(this.product);
  }

  addToCart(): void {
    if (this.product !== undefined && this.product.stock > 0) {
      this.cartFacade.addToCart(this.product);
      this.cartFacade.showPopup();
    }
  }
}
