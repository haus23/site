import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { Championship } from '../models/championship';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  championships: Championship[];

  currentChampionship: Championship;
  players: Player[];

  constructor(private api: ApiService) {}

  async loadChampionship(c: Championship) {

   this.currentChampionship = c;

    await Promise.all( [
      this.api.getPlayers(c.id)
    ]).then( results => {
      this.players = results[0];
    });

    return c;
  }
}
