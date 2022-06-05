import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { first, Subject, takeUntil } from 'rxjs';
import { IDevice } from 'src/app/modules/account/models/interfaces';
import { DevicesService } from 'src/app/modules/account/services/devices.service';

@Component({
  selector: 'app-booked-devices-list',
  templateUrl: './booked-devices-list.component.html',
  styleUrls: ['./booked-devices-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookedDevicesListComponent implements OnInit, OnDestroy {

  private unsubscriber: Subject<void> = new Subject<void>();

  bookedDevices: IDevice[] = []
  constructor(
    private devicesService: DevicesService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.devicesService.getBookedDevices()
      .pipe(takeUntil(this.unsubscriber), first())
      .subscribe(devices => {
        this.bookedDevices = devices
        this.ref.markForCheck();
      })
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

}
