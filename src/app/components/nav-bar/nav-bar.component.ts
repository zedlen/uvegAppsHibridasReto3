import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/', 'sign-in']);
  }
}
