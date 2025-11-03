import {CardCount} from '../../card/models/card-count.model';

export type SetCard = {
  id: string,
  name: string,
  logo: string,
  cardCount: CardCount,
  symbol?: string,
}
