import {Component, inject, OnInit} from '@angular/core';
import {BannerNewSet} from '../components/banner-new-set/banner-new-set';
import {ActivatedRoute} from '@angular/router';
import {SetCardDetail, setCardDetailDefault} from '../../products/models/set-detail.model';

@Component({
  selector: 'app-home.page',
  imports: [
    BannerNewSet
  ],
  template: `
    <main>
      <app-banner-new-set [newSet]="newSet"></app-banner-new-set>
    </main>
  `,
  styles: ``,
})
export default class HomePage implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  newSet: SetCardDetail = setCardDetailDefault;

  ngOnInit() {
    this.newSet = this.route.snapshot.data['newSet'];
  }
}
