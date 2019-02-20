import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { Championship } from '../models/championship';
import { Player } from '../models/player';
import { Round } from '../models/round';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  championships: Championship[];

  currentChampionship: Championship;
  players: Player[];
  rounds: Round[];
  matches: Match[];

  constructor(private api: ApiService) {}

  async loadChampionship(c: Championship) {

   this.currentChampionship = c;

    await Promise.all( [
      this.api.getPlayers(c.id),
      this.api.getRounds(c.id),
      this.api.getMatches(c.id)
    ]).then( results => {
      this.players = results[0];
      this.rounds = results[1];
      this.matches = results[2];
    });

    return c;
  }
}
