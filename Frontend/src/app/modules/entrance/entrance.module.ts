import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntranceRoutingModule } from './entrance-routing.module';
import { FormEntranceComponent } from './form-entrance/form-entrance.component';
import { EntranceComponent } from './entrance.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    EntranceComponent,
    FormEntranceComponent
  ],
  imports: [
    CommonModule,
    EntranceRoutingModule
  ],
  bootstrap: []
})
export class EntranceModule { }
