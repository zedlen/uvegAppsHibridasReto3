import { Component, Input } from '@angular/core';
import { Game } from '../../../../services/games/games.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input('game') game: Game;
}
