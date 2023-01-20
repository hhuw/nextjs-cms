import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInfoModel } from '../models/login-info.model';
import { LoginListModel } from '../models/login-list.model';
import { LoginQueryModel } from '../models/login-query.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'api/auth';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      pragma: 'no-cache'
    })
  };

  constructor(private readonly http: HttpClient) { }

  login(filter: LoginQueryModel) {
    const url = `${this.apiUrl}/login`;
    return this.http.post<LoginInfoModel>(url, filter, this.httpOptions);
  }
}
