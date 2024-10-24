import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { AddGameComponent } from './add-game/add-game.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AddGameComponent, GameCardComponent, ListComponent],
  imports: [CommonModule, GamesRoutingModule],
  bootstrap: [],
})
export class GamesModule {}
