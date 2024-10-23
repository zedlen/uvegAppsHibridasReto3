import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { hasSessionGuard } from '../../guards/has-session/has-session.guard';
import { AddGameComponent } from './add-game/add-game.component';

const routes: Routes = [
  {
    path: 'games/add',
    component: AddGameComponent,
    canActivate: [hasSessionGuard],
  },
  {
    path: 'games/:type',
    component: ListComponent,
    canActivate: [hasSessionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
