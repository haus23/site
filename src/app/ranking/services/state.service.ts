import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Championship } from '../models/championship';
import { Player } from '../models/player';
import { Round } from '../models/round';
import { Match } from '../models/match';
import { Tip } from '../models/tip';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _offline = false;

  championships: Championship[];

  currentChampionship: Championship;
  players: Player[];
  rounds: Round[];
  matches: Match[];
  tips: Tip[];

  constructor(private api: ApiService) { }

  async loadChampionshipList() {

    try {
      this.championships = await this.api.getChampionships();

      // store for offline usage
      localStorage.championships = JSON.stringify(this.championships);

    } catch {

      // put app in offline mode
      this._offline = true;
      this.championships = JSON.parse(localStorage.championships);
    }

    return this.championships;
  }

  async loadChampionshipData(c: Championship) {

    this.currentChampionship = c;

    if (!this._offline) {
      await Promise.all([
        this.api.getPlayers(c.id),
        this.api.getRounds(c.id),
        this.api.getMatches(c.id),
        this.api.getTips(c.id)
      ]).then(results => {
        this.players = results[0];
        this.rounds = results[1];
        this.matches = results[2];
        this.tips = results[3];

        // store for offline usage
        localStorage.players = JSON.stringify(this.players);
        localStorage.rounds = JSON.stringify(this.rounds);
        localStorage.matches = JSON.stringify(this.matches);
        localStorage.tips = JSON.stringify(this.tips);
      });

    } else {

      this.players = JSON.parse(localStorage.players);
      this.rounds = JSON.parse(localStorage.rounds);
      this.matches = JSON.parse(localStorage.matches);
      this.tips = JSON.parse(localStorage.tips);

    }

    return c;
  }
}
