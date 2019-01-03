import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
    return this._http.post('https://localhost:44370/api/auth/login', { 'UserName': username, 'Password': password })
      .pipe(
        map((resp: any) => {
          const user = resp;
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
          }
        }
        )
      );
  }

  register(model: any) {
    return this._http.post('https://localhost:44370/api/auth/register', model);
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}
