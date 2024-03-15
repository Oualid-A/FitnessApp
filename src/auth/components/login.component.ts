import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mg-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  template: `<div class="flex justify-around items-center h-screen ">
    <img
      src="../../assets/loginPics/mgaddarMan.jpg"
      alt="Men Mgaddar"
      srcset=""
      class="w-[50%] rounded-lg h-[90%]"
    />
    <form
      class="w-full max-w-xs p-4 rounded-[5px] backdrop-blur-md	"
    >
    <img src="../../assets/loginPics/GetMgaddar.svg" alt="" srcset="">
      <mat-form-field class="w-full mt-6" >
        <mat-label>Enter your email</mat-label>
        <input
          matInput
          placeholder="abc@example.com"
          [formControl]="email"
          required
        />
        <mat-icon matSuffix>email</mat-icon>
        <mat-error *ngIf="email.invalid">{{ getErrorMessage() }}</mat-error>
      </mat-form-field>
      <mat-form-field class="w-full">
        <mat-label>Enter your password</mat-label>
        <input
          matInput
          [type]="hide ? 'password' : 'text'"
          [formControl]="password"
        />
        <button
          mat-icon-button
          matSuffix
          (click)="hide = !hide"
          [attr.aria-label]="'Hide password'"
          [attr.aria-pressed]="hide"
        >
          <mat-icon>{{ hide ? 'visibility_off' : 'visibility' }}</mat-icon>
        </button>
      </mat-form-field>
      <div class="flex flex-col">
        <button mat-raised-button color="primary" (click)="login()">
          Login
        </button>
        <span class="mt-4 text-xs"
          >Are You New ?, let's
          <a class="font-semibold" href="/auth/signup">Create Account</a></span
        >
      </div>
    </form>
  </div>`,
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern('/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/'),
  ]);

  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login() {
    const emailValue = this.email.value || '';
    const passwordValue = this.password.value || '';

    this.authService.login(emailValue, passwordValue).then(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
