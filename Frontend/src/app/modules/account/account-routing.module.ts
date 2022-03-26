import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/devices/devices.module').then(m => m.DevicesModule) },
      { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
      { path: 'devices', loadChildren: () => import('./modules/devices/devices.module').then(m => m.DevicesModule) },
      { path: 'booking', loadChildren: () => import('./modules/booking/booking.module').then(m => m.BookingModule) }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
