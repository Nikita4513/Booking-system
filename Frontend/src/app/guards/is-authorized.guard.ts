import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterLink, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Injectable()
export class IsAuthorizedGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.accountService.isAuthorized()
  }
}
