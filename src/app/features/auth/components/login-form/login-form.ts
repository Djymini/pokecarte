import {Component, inject} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {LoginFormModel} from '../../models/login-form.model';
import {LoginDto} from '../../dto/login-dto';
import {Router, RouterLink} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login-form',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  private formBuilder = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);

  constructor(
    private router: Router,
  ) {}


  loginForm: FormGroup<LoginFormModel> = this.formBuilder.group({
    email: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required),
    rememberMe: this.formBuilder.control(false)
  });

  onSubmit() {
    const credential: LoginDto = new LoginDto(this.loginForm.getRawValue().email, this.loginForm.getRawValue().password)
    this.authService.login(credential);
    this.router.navigate(['/']);
  }
}
