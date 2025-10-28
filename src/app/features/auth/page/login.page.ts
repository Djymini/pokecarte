import { Component } from '@angular/core';
import {LoginForm} from '../components/login-form/login-form';

@Component({
  selector: 'app-login.page',
  imports: [
    LoginForm
  ],
  template: `
    <main>
      <app-login-form></app-login-form>
    </main>
  `,
  styles: ``,
})
export default class LoginPage {

}
