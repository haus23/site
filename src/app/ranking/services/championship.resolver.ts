import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Championship } from '../models/championship';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipResolver implements Resolve<Championship> {

  constructor(private api: ApiService, private state: StateService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Promise<Championship> {

    const championships = await this.api.getChampionships();
    const current = championships[0];

    this.state.setCurrentChampionship(current);
    return current;
  }
}
