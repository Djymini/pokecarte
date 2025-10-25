import {CardCount} from '../../card/models/card-count.model';
import {Card} from '../../card/models/card.model';
import {CardLegal} from '../../card/models/card-legal.model';
import {Serie} from './serie.model';

export type SetCardDetail = {
  cardCount: CardCount;
  cards: Card[];
  id: string;
  legal: CardLegal;
  logo: string;
  name: string;
  releaseDate: string;
  serie: Serie;
  symbol: string;
}

export const setCardDetailDefault: SetCardDetail = {
  cardCount: {
    total: 0,
    official: 0,
  },
  cards: [
    {
      id: '',
      localId: '',
      name: 'Nom de la carte',
      image: '',
    },
  ],
  id: '',
  legal: {
    standard: false,
    expanded: false,
  },
  logo: '',
  name: 'Nom du set',
  releaseDate: '2025-01-01',
  serie: {
    id: '',
    name: 'Nom de la série',
    logo: '',
  },
  symbol: '',
};
