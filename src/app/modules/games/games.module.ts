import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { AddGameComponent } from './add-game/add-game.component';

@NgModule({
  declarations: [
    AddGameComponent
  ],
  imports: [CommonModule, GamesRoutingModule],
  bootstrap: [],
})
export class GamesModule {}
