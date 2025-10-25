import {inject, Injectable} from '@angular/core';
import {HomeApi} from './home.api';
import {HomeStore} from './home.store';
import {SetCardDetail} from '../../products/models/set-detail.model';

@Injectable({
  providedIn: 'root'
})
export class HomeFacade {
  private homeApi = inject(HomeApi);
  private homeStore = inject(HomeStore);

  async getNewSetCard(): Promise<SetCardDetail > {
    if (this.homeStore.newSet().id === "") {
      const newSet = await this.homeApi.getNewSetCard();
      this.homeStore.addNewSet(newSet);
      return newSet;
    }else {
      return this.homeStore.newSet();
    }
  }
}
