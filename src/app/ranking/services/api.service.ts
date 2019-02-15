import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Championship } from '../models/championship';
import { Player } from '../models/player';

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
}
