import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Championship } from '../models/championship';
import { ApiService } from './api.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentChampionshipResolver implements Resolve<Championship> {

  constructor(private api: ApiService, private state: StateService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Championship> {

    const championships: Championship[] = route.parent.data.championships;
    const slug = route.paramMap.get('slug');
    
    let current: Championship;
    if ( slug === null) {
      current = championships[0];
    } else {
      current = championships.find( c => c.slug === slug)
    }

    this.state.setCurrentChampionship(current);

    return current;
  }
}
