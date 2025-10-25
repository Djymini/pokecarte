import {computed, Injectable, signal} from '@angular/core';
import {SetCardDetail, setCardDetailDefault} from '../../products/models/set-detail.model';

@Injectable({
  providedIn: 'root'
})
export class HomeStore {
  private newSetSignal = signal<SetCardDetail>(setCardDetailDefault);

  newSet = computed(() => this.newSetSignal());

  addNewSet(newSet: SetCardDetail): void {
    this.newSetSignal.set(newSet);
  }
}
