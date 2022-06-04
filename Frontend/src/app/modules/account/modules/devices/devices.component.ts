import { Component, OnDestroy, OnInit } from '@angular/core';
import { first, Subject, takeUntil } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { IDevice, IDevices } from '../../models/interfaces';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit, OnDestroy {
  private unsubscriber: Subject<void> = new Subject<void>();

  devices: IDevice[] = [];

  constructor(
    private devicesService: DevicesService,
  ) {
    this.devicesService.getAllDevices()
      .pipe(takeUntil(this.unsubscriber), first())
      .subscribe(d => {
        this.devices = d;
      })
  }
  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  ngOnInit(): void {
  }

}
