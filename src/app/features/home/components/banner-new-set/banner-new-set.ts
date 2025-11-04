import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {SetCardDetail} from '../../../products/models/set-detail.model';
import {NgOptimizedImage} from '@angular/common';
import {ButtonWithGradient} from '../../../../shared/components/button-with-gradient/button-with-gradient';
import {Card} from '../../../card/components/card/card';

@Component({
  selector: 'app-banner-new-set',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgOptimizedImage,
    ButtonWithGradient,
    Card
  ],
  templateUrl: './banner-new-set.html',
  styleUrl: './banner-new-set.scss',
})
export class BannerNewSet {
  newSet = input.required<SetCardDetail>();
  bannerCards = computed(() => this.newSet()?.cards.slice(0, 5));

  nameButton: string = "Découvrir le nouveau set coucou 2"
  widthCard: string = "195";
  heightCard: string = "268";
}
