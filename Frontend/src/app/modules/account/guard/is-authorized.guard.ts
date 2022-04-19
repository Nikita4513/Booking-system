import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Injectable()
export class IsAuthorizedGuard implements CanActivate {
  constructor(
    private accountService: AccountService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      if (!this.accountService.isAuthorized){
        alert('Нужно войти в аккаунт');
        return of(false);
      }
    return of(this.accountService.isAuthorized);
  }
}
