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

    const championships = await this.appState.loadChampionshipList();
    const last = championships[0];
    return this.appState.loadChampionshipData(last);

  }
}
