import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { IsAuthorizedGuard } from './guard/is-authorized.guard';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule), canActivate: [IsAuthorizedGuard] },
      { path: 'devices', loadChildren: () => import('./modules/devices/devices.module').then(m => m.DevicesModule), canActivate: [IsAuthorizedGuard] },
      { path: 'booking', loadChildren: () => import('./modules/booking/booking.module').then(m => m.BookingModule), canActivate: [IsAuthorizedGuard] }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
