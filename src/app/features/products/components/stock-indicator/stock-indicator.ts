import {Component, input, OnChanges, SimpleChanges} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-stock-indicator',
  imports: [
    NgStyle
  ],
  templateUrl: './stock-indicator.html',
  styleUrl: './stock-indicator.scss',
})
export class StockIndicator implements  OnChanges{
  stockValue = input.required<number>();
  color : string = '#415D22FF';

  updateStockIndicator(): void {
    if (this.stockValue() > 0) {
      this.color = '#415D22FF';
    }else {
      this.color = '#F14135FF';
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["stockValue"]) {
      this.updateStockIndicator();
    }
  }
}
