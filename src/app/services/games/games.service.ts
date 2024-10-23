import { Injectable } from '@angular/core';

export interface Game {
  id?: string;
  title: string;
  description: string;
  releaseDate: string;
  image: string;
  rating: number;
  downloads: number;
  comingSoon: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private games: Array<Game> = [];
  constructor() {}

  addGame(game: Game): void {
    this.games.push({ ...game, id: this.games.length.toString() });
  }

  getBestSellers(): Array<Game> {
    return this.games.filter((game) => game.rating >= 4);
  }

  getTopDownloads(): Array<Game> {
    return this.games.filter((game) => game.downloads >= 100);
  }

  getComingSoon(): Array<Game> {
    return this.games.filter((game) => game.comingSoon);
  }

  editGame(game: Game): void {
    this.games = this.games.map((g) => {
      if (game.id == g.id) return game;
      return g;
    });
  }
}
