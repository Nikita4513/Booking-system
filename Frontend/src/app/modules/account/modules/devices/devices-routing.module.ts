import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceDescriptionComponent } from './components/device-description/device-description.component';
import { DevicesComponent } from './devices.component';

const routes: Routes = [
  { path: '', component: DevicesComponent },
  { path: 'device/:id', component: DeviceDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
