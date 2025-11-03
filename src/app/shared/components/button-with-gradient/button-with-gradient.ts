import {Component, input} from '@angular/core';

@Component({
  selector: 'app-button-with-gradient',
  imports: [],
  templateUrl: './button-with-gradient.html',
  styleUrl: './button-with-gradient.scss',
})
export class ButtonWithGradient {
  nameButton = input.required<string>();
}
