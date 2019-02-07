import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Championship } from '../models/championship';
import { ApiService } from './api.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipsResolver implements Resolve<Championship[]> {

  constructor(private api: ApiService, private state: StateService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Championship[]> {

    const championships = await this.api.getChampionships();

    if (route.firstChild.paramMap.get('slug') === null) {

    }
    // const current = championships[0];

    this.state.setChampionships(championships);
    // this.state.setCurrentChampionship(current);

    return championships;
  }
}
