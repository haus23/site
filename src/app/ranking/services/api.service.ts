import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Championship } from '../models/championship';
import { Player } from '../models/player';
import { Round } from '../models/round';
import { Match } from '../models/match';
import { Tip } from '../models/tip';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiHost + '/v1/ranking/';

  constructor(private http: HttpClient) { }

  async getChampionships() {
    return this.http.get<Championship[]>(this.baseUrl + 'championships')
      .toPromise();
  }

  async getPlayers(championshipId: number) {
    return this.http.get<Player[]>(this.baseUrl + 'players/' + championshipId)
      .toPromise();
  }

  async getRounds(championshipId: number) {
    return this.http.get<Round[]>(this.baseUrl + 'rounds/' + championshipId)
      .toPromise();
  }

  async getMatches(championshipId: number) {
    return this.http.get<Match[]>(this.baseUrl + 'matches/' + championshipId)
      .toPromise();
  }

  async getTips(championshipId: number) {
    return this.http.get<Tip[]>(this.baseUrl + 'tips/' + championshipId)
      .toPromise();
  }
}
