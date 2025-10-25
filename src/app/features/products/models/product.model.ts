import {Card} from '../../card/models/card.model';

export type Product = {
  card: Card;
  price: number;
  stock: number;
  discount: number;
}
