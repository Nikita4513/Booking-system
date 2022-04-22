import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
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
      //this.isAuthorized = true;
      return of(true);
    }))
  }

  public isAuthorized() : Observable<boolean> {
    return this.http.get<IResponseAuth>('https://localhost:44382/user/auth', {
        withCredentials: true
      })
      .pipe(map(res => res.isAuthorized));
  }
}

export interface IResponseAuth {
  isAuthorized: boolean
}
