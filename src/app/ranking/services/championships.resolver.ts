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
    this.state.setChampionships(championships);

    return championships;
  }
}
