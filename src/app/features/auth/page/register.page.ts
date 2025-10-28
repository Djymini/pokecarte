import { Component } from '@angular/core';
import {RegisterForm} from '../components/register-form/register-form';

@Component({
  selector: 'app-register.page',
  imports: [
    RegisterForm
  ],
  template: `
    <main>
      <app-register-form></app-register-form>
    </main>
  `,
  styles: ``,
})
export default class RegisterPage {

}
