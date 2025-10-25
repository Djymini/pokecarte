import { ResolveFn } from '@angular/router';
import {SetCardDetail} from '../../../features/products/models/set-detail.model';
import {HomeFacade} from '../../../features/home/services/home.facade';
import {inject} from '@angular/core';

export const newSetResolver: ResolveFn<SetCardDetail> = (route, state) => {
  const homeFacade = inject(HomeFacade);
  return homeFacade.getNewSetCard();
};
