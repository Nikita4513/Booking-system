import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public authorized: boolean = false;
  private host: string = "localhost:44382";

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string, rememberMe: boolean){
    return this.http.post<Response>(`https://${this.host}/user/login`, {
      "nickname": email,
      "password": password,
      "rememberMe": rememberMe
    }, {
      withCredentials: true
    })
  }
}
