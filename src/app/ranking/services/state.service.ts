import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { Championship } from '../models/championship';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _championships: Championship[];

  private currentChampionshipSource = new ReplaySubject<Championship>(1);
  currentChampionship$ = this.currentChampionshipSource.asObservable();

  private rankingSource = new ReplaySubject<Player[]>(1);
  ranking$ = this.rankingSource.asObservable();

  constructor(private api: ApiService) {}

  get championships() {
    return this._championships;
  }

  set championships(value : Championship[]) {
    this._championships = value;
  }

  async loadChampionship(c: Championship) {

    this.currentChampionshipSource.next(c);

    await Promise.all( [
      this.api.getPlayers(c.id)
    ]).then( results => {
      this.rankingSource.next(results[0]);
    });

    return c;
  }
}
