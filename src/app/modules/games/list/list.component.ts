import { Component } from '@angular/core';
import { Game, GamesService } from '../../../services/games/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  games: Array<Game> = [];

  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const { type } = params;
      switch (type) {
        case 'best-sellers':
          this.games = this.gameService.getBestSellers();
          break;
        case 'top-downloads':
          this.games = this.gameService.getTopDownloads();
          break;
        case 'coming-soon':
          this.games = this.gameService.getComingSoon();
          break;
        default:
          this.router.navigate(['/', 'not-found']);
          break;
      }
    });
  }
}
