import { Injectable } from '@angular/core';
import { initalGames } from '../../constants/games';
import { BehaviorSubject } from 'rxjs';

export interface Game {
  id?: string;
  title: string;
  description: string;
  releaseDate: string;
  image?: string;
  rating: number;
  downloads: number;
  comingSoon: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private games: BehaviorSubject<Array<Game>> = new BehaviorSubject<
    Array<Game>
  >(initalGames);
  constructor() {}

  addGame(game: Game): void {
    this.games.next([
      ...this.games.value,
      { ...game, id: this.games.value.length.toString() },
    ]);
  }

  getBestSellers(): Array<Game> {
    return this.games.getValue().filter((game) => game.rating >= 4);
  }

  getTopDownloads(): Array<Game> {
    return this.games.value.filter((game) => game.downloads >= 100);
  }

  getComingSoon(): Array<Game> {
    return this.games.value.filter((game) => game.comingSoon);
  }

  editGame(game: Game): void {
    this.games.next(
      this.games.value.map((g) => {
        if (game.id == g.id) return game;
        return g;
      })
    );
  }
}
