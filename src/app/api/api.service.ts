import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  data: Array<any>;

  timestamp: string = 'ts=1614526463';
  apikey: string = '&apikey=19bbee18ff1e5fee4fd6e6099a8a769c';
  md5: string = '&hash=3891a3df5a15298591a50002cb4f538a';
  heroes: string = 'characters?';
  heroName: string = 'Spider-Man'; // Ex: characters?name=${this.heroName}
  limit: string = '&limit=10';
  baseUrl: string = 'https://gateway.marvel.com:443/v1/public/';

  queryHeroes: string = `${this.baseUrl}${this.heroes}${this.timestamp}${this.apikey}${this.md5}${this.limit}`;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any> {
    return this.http.get(this.queryHeroes);
  }

  async loadHeroes() {
    let response = await this.getHeroes().toPromise();
    this.data = response;
  }
}
