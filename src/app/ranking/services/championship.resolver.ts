import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Championship } from '../models/championship';
import { ApiService } from './api.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipResolver implements Resolve<Championship> {

  constructor(private appState: StateService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Championship> {
    const last = this.appState.championships[0];
    return this.appState.loadChampionship(last);
  }
}
