import {Component, input} from '@angular/core';
import {Card} from '../../../card/components/card/card';
import {Product} from '../../../products/models/product.model';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-carousel-product-hype',
  imports: [
    Card,
    NgStyle
  ],
  templateUrl: './carousel-product-hype.html',
  styleUrl: './carousel-product-hype.scss',
})
export class CarouselProductHype {
  productHype = input.required<Product[]>();

  widthCard: string = '390'
  heightCard: string = '538'
  active = 4;
  readonly  maxCardVisibility = 3;
  protected readonly Math = Math;

  get count() {
    return this.productHype().length;
  }

  prev() {
    if (this.active > 0) this.active--;
  }

  next() {
    if (this.active < this.count - 1) this.active++;
  }

  getStyle(i: number): any {
    const offset = (this.active - i) / 3;
    const absOffset = Math.abs(offset);

    return {
      '--active': i === this.active ? 1 : 0,
      '--offset': offset,
      '--direction': Math.sign(this.active - i),
      '--abs-offset': absOffset,
      'pointer-events': i === this.active ? 'auto' : 'none',
      'opacity': absOffset >= this.maxCardVisibility ? '0' : '1',
      'display': absOffset > this.maxCardVisibility ? 'none' : 'block'
    };
  }
}
