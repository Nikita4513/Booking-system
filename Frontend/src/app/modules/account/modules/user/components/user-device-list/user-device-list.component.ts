import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { first, Subject, takeUntil } from 'rxjs';
import { IDevice } from 'src/app/modules/account/models/interfaces';
import { DevicesService } from 'src/app/modules/account/services/devices.service';

@Component({
  selector: 'app-user-device-list',
  templateUrl: './user-device-list.component.html',
  styleUrls: ['./user-device-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDeviceListComponent implements OnInit, OnDestroy {

  private unsubscriber: Subject<void> = new Subject<void>();
  userDevices: IDevice[] = []
  constructor(
    private devicesService: DevicesService,
    private ref: ChangeDetectorRef
  ) {
   }

  ngOnInit(): void {
    this.devicesService.getUserDevices()
      .pipe(takeUntil(this.unsubscriber), first())
      .subscribe(devices => {
        this.userDevices = devices;
        this.ref.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

}
