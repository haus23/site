import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { Championship } from '../models/championship';
import { Player } from '../models/player';
import { Round } from '../models/round';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  championships: Championship[];

  currentChampionship: Championship;
  players: Player[];
  rounds: Round[];

  constructor(private api: ApiService) {}

  async loadChampionship(c: Championship) {

   this.currentChampionship = c;

    await Promise.all( [
      this.api.getPlayers(c.id),
      this.api.getRounds(c.id),
    ]).then( results => {
      this.players = results[0];
      this.rounds = results[1];
    });

    return c;
  }
}
