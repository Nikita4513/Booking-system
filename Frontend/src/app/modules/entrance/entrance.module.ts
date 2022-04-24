import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntranceRoutingModule } from './entrance-routing.module';
import { FormEntranceComponent } from './form-entrance/form-entrance.component';
import { EntranceComponent } from './entrance.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EntranceComponent,
    FormEntranceComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    EntranceRoutingModule
  ],
  bootstrap: []
})
export class EntranceModule { }
