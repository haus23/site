import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Championship } from '../models/championship';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  currentChampionship$: Observable<Championship>;
  private currentChampionshipSource = new ReplaySubject<Championship>(1);

  constructor() {
    this.currentChampionship$ = this.currentChampionshipSource.asObservable();
  }

  setCurrentChampionship(c: Championship) {
    this.currentChampionshipSource.next(c);
  }
}
