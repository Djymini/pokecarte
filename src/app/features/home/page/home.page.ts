import {Component, inject, OnInit} from '@angular/core';
import {BannerNewSet} from '../components/banner-new-set/banner-new-set';
import {ActivatedRoute} from '@angular/router';
import {SetCardDetail, setCardDetailDefault} from '../../products/models/set-detail.model';
import {Product} from '../../products/models/product.model';
import {CarouselProductHype} from '../components/carousel-product-hype/carousel-product-hype';
import {PresentationBestPromotion} from '../components/presentation-best-promotion/presentation-best-promotion';

@Component({
  selector: 'app-home.page',
  imports: [
    BannerNewSet,
    CarouselProductHype,
    PresentationBestPromotion
  ],
  template: `
    <app-banner-new-set [newSet]="newSet"></app-banner-new-set>
    <app-carousel-product-hype [productHype]="productsHype"></app-carousel-product-hype>
    <app-presentation-best-promotion [bestPromotion]="bestPromotion"></app-presentation-best-promotion>
  `,
  styles: ``,
})
export default class HomePage implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  newSet: SetCardDetail = setCardDetailDefault;
  productsHype: Product[] = [];
  bestPromotion: Product[] = [];

  ngOnInit() {
    this.newSet = this.route.snapshot.data['newSet'];
    this.productsHype = this.route.snapshot.data['productsHype'];
    this.bestPromotion = this.route.snapshot.data['bestPromotion'];
  }
}
