import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {
  data: Array<any>;
  timestamp: string = '1614526463';
  apikey: string = '19bbee18ff1e5fee4fd6e6099a8a769c';
  md5: string = '3891a3df5a15298591a50002cb4f538a';
  heroes: string = 'characters';
  heroName: string = 'Spider-Man';
  baseUrl = `https://gateway.marvel.com:443/v1/public/${this.heroes}?name=${this.heroName}&ts=${this.timestamp}&apikey=${this.apikey}&hash=${this.md5}`;

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  async loadData() {
    let response = await this.getData().toPromise();
    this.data = response;
  }
}
