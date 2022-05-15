import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IsAuthorizedGuard } from './guard/is-authorized.guard';
import { DevicesService } from './services/devices.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    IsAuthorizedGuard,
    DevicesService
  ]
})
export class AccountModule { }
