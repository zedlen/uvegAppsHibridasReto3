import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  group: FormGroup;
  invalidUser: Boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.group = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSignInPress(): void {
    if (!this.group.valid) {
      return;
    }
    const { email, password } = this.group.value;
    if (!this.authService.login(email, password)) {
      this.invalidUser = true;
      return;
    }
    this.router.navigate(['/', 'games']);
  }
}
