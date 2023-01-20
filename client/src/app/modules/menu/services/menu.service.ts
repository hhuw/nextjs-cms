import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'api/user';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      pragma: 'no-cache'
    })
  };

  constructor(private readonly http: HttpClient) { }

  getEmployee() {
    const url = `${this.apiUrl}/base-info`;
    return this.http.get(url, this.httpOptions);
  }
}
