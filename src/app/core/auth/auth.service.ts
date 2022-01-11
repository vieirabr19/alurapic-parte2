import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

const HTTP_HOST = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  autentications(userName: string, password: string) {
    return this.http.post(`${HTTP_HOST}/user/login`, {userName, password}, {observe: 'response'})
    .pipe(
      tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.tokenService.setToken(authToken);
        console.log(`User ${userName} authenticated with token ${authToken}`);
      })
    )
  }
}
