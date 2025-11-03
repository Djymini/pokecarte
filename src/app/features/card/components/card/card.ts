import {Component, inject, input} from '@angular/core';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [
    NgStyle,
    NgOptimizedImage
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  private router = inject(Router);
  id =input.required<string>();
  cardImage = input.required<string>();
  cardName = input.required<string>();
  width = input.required<string>();
  height = input.required<string>();

  trackers: number[] = new Array<number>(25);

  goToDetail(){
    this.router.navigate([`/product-detail/${this.id()}`]);
  }
}
