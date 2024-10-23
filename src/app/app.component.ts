import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLogged: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.getIsLogged().subscribe((value: boolean) => {
      this.isLogged = value;
    });
  }
}
