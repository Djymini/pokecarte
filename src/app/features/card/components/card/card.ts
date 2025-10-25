import {Component, input} from '@angular/core';
import {NgOptimizedImage, NgStyle} from '@angular/common';

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
  cardImage = input.required<string>();
  cardName = input.required<string>();
  width = input.required<string>();
  height = input.required<string>();
}
