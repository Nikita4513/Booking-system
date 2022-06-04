import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first, Subject, takeUntil } from 'rxjs';
import { IDevice } from 'src/app/modules/account/models/interfaces';
import { DevicesService } from 'src/app/modules/account/services/devices.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit, OnDestroy {

  private unsubscriber: Subject<void> = new Subject<void>(); 

  addDeviceForm = new FormGroup({
    name: new FormControl(''),
    year: new FormControl(''),
    description: new FormControl('')
  })

  public get currentYear() { 
    return new Date().getFullYear();
  }

  constructor(
    private devicesService: DevicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  public addDevice() {
    this.devicesService.addDevice({
      name: this.addDeviceForm.controls['name'].value,
      year: this.addDeviceForm.controls['year'].value,
      description: this.addDeviceForm.controls['description'].value,
    }).pipe(takeUntil(this.unsubscriber), first())
      .subscribe(_ => this.router.navigate(['/devices']));
  }
}
