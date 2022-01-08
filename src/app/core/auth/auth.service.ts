import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const HTTP_HOST = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  autentications(userName: string, password: string) {
    return this.http.post(`${HTTP_HOST}/user/login`, {userName, password});
  }
}
