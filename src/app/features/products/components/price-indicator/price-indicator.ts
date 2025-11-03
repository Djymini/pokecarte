import {Component, computed, inject, input} from '@angular/core';
import {CurrencyPipe, NgStyle} from '@angular/common';

@Component({
  selector: 'app-price-indicator',
  imports: [
    NgStyle,
    CurrencyPipe
  ],
  templateUrl: './price-indicator.html',
  styleUrl: './price-indicator.scss',
})
export class PriceIndicator {
  price = input.required<number>()
  discount = input.required<number>()
  trueprice = computed(() => (this.price() - (this.discount() * 0.01 * this.price())))
  showPriceDiscount: boolean = false;

  color : string = "rgba(0,0,0,0.54)"
  textDecoration:string = "line-through";
  display:string = "none";
  fontSize: string = "24px";

  updateShowPriceDiscount(): void{
    if (this.discount() > 0){
      this.showPriceDiscount = true;
    }else {
      this.showPriceDiscount = false;
    }
  }

  ngOnInit() {
    this.updateShowPriceDiscount();

    if(this.showPriceDiscount){
      this.display = "block";
      this.color = "rgba(0,0,0,0.54)";
      this.textDecoration = "line-through";
      this.fontSize = "14px";
    }else {
      this.display = "none";
      this.color = "#4466a9";
      this.textDecoration = "none";
      this.fontSize = "24px";
    }
  }
}
