import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'mg-signup',
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
  template: `<div class="flex justify-around items-center h-screen  ">
     <img
      src="../../assets/loginPics/mgaddarMan.jpg"
      alt="Men Mgaddar"
      srcset=""
      class="w-[50%] rounded-lg h-screen"
    />
    <form class="w-full max-w-xs p-4">
      <img src="../../assets/loginPics/GetMgaddar.svg" alt="" srcset="" >
      <mat-form-field class="w-full mt-6 !text-white">
        <mat-label>Enter your email</mat-label>
        <input
          matInput
          placeholder="abc@example.com"
          [formControl]="email"
          required
          class=""
        />
        <mat-icon matSuffix>email</mat-icon>
        <mat-error *ngIf="email.invalid">{{ getErrorMessage() }}</mat-error>
      </mat-form-field>
      <mat-form-field class="w-full !text-white">
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
        <button mat-raised-button color="primary"   class="!bg-black" (click)="signup()">Sign Up</button>
        <span class="mt-4 text-xs">You already have account ?, let's <a class="font-semibold" href="/auth/login">Login</a></span>
      </div>
    </form>
  </div>`,
})
export class SignupComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(50),
  ]);

  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  signup() {
    const emailValue = this.email.value || '';
    const passwordValue = this.password.value || '';

    this.authService.signup(emailValue, passwordValue).then(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
