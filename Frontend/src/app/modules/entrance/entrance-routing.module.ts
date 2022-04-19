import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEntranceComponent } from './form-entrance/form-entrance.component';

const routes: Routes = [
  { path: '', component: FormEntranceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntranceRoutingModule { }
