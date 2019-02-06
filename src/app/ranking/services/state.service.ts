import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Championship } from '../models/championship';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  currentChampionship$: Observable<Championship>;
  private currentChampionshipSource = new ReplaySubject<Championship>(1);

  ranking$: Observable<Player[]>;
  private rankingSource = new ReplaySubject<Player[]>(1);

  constructor(private api: ApiService) {
    this.currentChampionship$ = this.currentChampionshipSource.asObservable();
    this.ranking$ = this.rankingSource.asObservable();

    this.currentChampionship$.subscribe( async (c) => {
      const players = await api.getPlayers(c.id);
      this.rankingSource.next(players);
    });
  }

  getCurrentChampionship(slug?: string) {}

  setCurrentChampionship(c: Championship) {
    this.currentChampionshipSource.next(c);
  }
}
