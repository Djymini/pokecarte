import { Component } from '@angular/core';
import {ErrorContain} from '../components/error-contain/error-contain';

@Component({
  selector: 'app-error.page',
  imports: [
    ErrorContain
  ],
  template: `
    <app-error-contain></app-error-contain>
  `,
  styles: ``,
})
export default class ErrorPage {

}
