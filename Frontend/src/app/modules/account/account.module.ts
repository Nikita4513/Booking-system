import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IsAuthorizedGuard } from './guard/is-authorized.guard';


@NgModule({
  declarations: [
    AccountComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  providers: [
    IsAuthorizedGuard
  ]
})
export class AccountModule { }
