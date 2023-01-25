import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'http://localhost:3333/api/';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
}
