import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './components/entrance/entrance.component';

const routes: Routes = [
  { path: "entrance", component: EntranceComponent },
  { path: 'devices', loadChildren: () => import('./modules/devices/devices.module').then(m => m.DevicesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
