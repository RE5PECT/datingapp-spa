import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _http: HttpClient) { }

login(username: string, password: string) {
  return this._http.post('https://localhost:44370/api/auth/login', {'UserName': username, 'Password': password})
  .pipe(
    map((resp: any) => {
      const user = resp;
      if (user){
        localStorage.setItem('token', user.token);
      }
    }
    )
  );
}

}
