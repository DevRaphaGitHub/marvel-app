import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  data: Array<any>;
  timestamp: string = 'ts=1614526463';
  apikey: string = '&apikey=19bbee18ff1e5fee4fd6e6099a8a769c';
  md5: string = '&hash=3891a3df5a15298591a50002cb4f538a';
  heroes: string = 'characters?';
  heroName: string = 'Spider-Man'; // Ex: characters?name=${this.heroName}
  limit: string = '&limit=10';
  baseUrl = 'https://gateway.marvel.com:443/v1/public/';
  url = `${this.baseUrl}${this.heroes}${this.timestamp}${this.apikey}${this.md5}${this.limit}`;

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  async loadData() {
    let response = await this.getData().toPromise();
    this.data = response;
  }
}
