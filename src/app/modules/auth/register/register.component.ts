import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  group: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.group = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', [
        Validators.required,
        this.createCompareValidator('password', 'repeatPassword'),
      ]),
    });
  }

  onSignUpPress(): void {
    if (!this.group.valid) {
      return;
    }
    const { name, email, password } = this.group.value;
    this.authService.signIn(name, email, password);
    this.router.navigate(['/', 'games']);
  }

  createCompareValidator(controlNameOne: string, controlNameTwo: string) {
    return () => {
      const controlOne: AbstractControl | null =
        this.group?.get(controlNameOne);
      const controlTwo: AbstractControl | null =
        this.group?.get(controlNameTwo);
      if (controlOne?.value !== controlTwo?.value)
        return { match_error: 'Value does not match' };
      return null;
    };
  }
}
