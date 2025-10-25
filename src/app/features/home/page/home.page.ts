import {Component, inject, OnInit} from '@angular/core';
import {BannerNewSet} from '../components/banner-new-set/banner-new-set';
import {ActivatedRoute} from '@angular/router';
import {SetCardDetail, setCardDetailDefault} from '../../products/models/set-detail.model';
import {Product} from '../../products/models/product.model';
import {CarouselProductHype} from '../components/carousel-product-hype/carousel-product-hype';

@Component({
  selector: 'app-home.page',
  imports: [
    BannerNewSet,
    CarouselProductHype
  ],
  template: `
    <main>
      <app-banner-new-set [newSet]="newSet"></app-banner-new-set>
      <app-carousel-product-hype [productHype]="productsHype"></app-carousel-product-hype>
    </main>
  `,
  styles: ``,
})
export default class HomePage implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  newSet: SetCardDetail = setCardDetailDefault;
  productsHype: Product[] = [];

  ngOnInit() {
    this.newSet = this.route.snapshot.data['newSet'];
    this.productsHype = this.route.snapshot.data['productsHype'];
  }
}
