import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public isAuthorized: boolean = false;
  public readonly host: string = "localhost:44382";

  constructor(
    private http: HttpClient
  ) { }

  public login(email: string, password: string, rememberMe: boolean) : Observable<boolean> {
    return this.http.post<Response>(`https://${this.host}/user/login`, {
      nickname: email,
      password,
      rememberMe
    }, {
      withCredentials: true
    }).pipe(switchMap(x => {
      this.isAuthorized = true;
      return of(true);
    }))
  }
}
