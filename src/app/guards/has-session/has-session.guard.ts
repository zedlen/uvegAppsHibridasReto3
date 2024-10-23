import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const hasSessionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLogged = localStorage.getItem('isLogged');
  if (!isLogged) {
    router.navigate(['/', 'sign-in']);
    return false;
  }
  return true;
};
