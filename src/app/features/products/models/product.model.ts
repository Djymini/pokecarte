import {Card} from '../../card/models/card.model';

export type Product = {
  id: string,
  name: string,
  image: string,
  category: string,
  illustrator: string,
  rarity: string,
  hp: number,
  description: string,
  stage: string,
  retreat: number,
  price: number,
  stock: number,
  discount: number,
  setId: string,
  types: {
    type: string,
    value: string,
  }[],
  weakness: {
    type: string,
    value: string,
  }[],
  resistances: {
    type: string,
    value: string,
  }[],
}
