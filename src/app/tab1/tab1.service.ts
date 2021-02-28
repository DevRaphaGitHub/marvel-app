import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {
  data: Array<any>;
  baseUrl = "https://gateway.marvel.com:443/v1/public/characters?ts=1614526463&apikey=19bbee18ff1e5fee4fd6e6099a8a769c&hash=3891a3df5a15298591a50002cb4f538a";

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  async loadData() {
    let response = await this.getData().toPromise();
    this.data = response;
  }
}
