import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from '../../../services/games/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrl: './add-game.component.scss',
})
export class AddGameComponent {
  group: FormGroup;

  constructor(private gamesService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.group = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required]),
      releaseDate: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      downloads: new FormControl('', [Validators.required, Validators.min(0)]),
      rating: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      comingSoon: new FormControl(false, []),
    });
  }

  createGame(): void {
    console.log(this.group);
    if (!this.group.valid) {
      return;
    }
    const {
      title,
      description,
      releaseDate,
      image,
      downloads,
      rating,
      comingSoon,
    } = this.group.value;
    console.log({
      title,
      description,
      releaseDate,
      image,
      downloads,
      rating,
      comingSoon,
    });
    this.gamesService.addGame({
      title,
      description,
      releaseDate,
      image,
      downloads,
      rating,
      comingSoon,
    });
    this.router.navigate(['/', 'games', 'best-sellers']);
  }
}
