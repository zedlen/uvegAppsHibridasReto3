import { Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
