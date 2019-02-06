import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Championship } from '../models/championship';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiHost + 'ranking/';

  constructor(private http: HttpClient) { }

  async getChampionships() {
    return this.http.get<Championship[]>(this.baseUrl + 'championships').toPromise();
  }
}
