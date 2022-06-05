import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, Subject, takeUntil } from 'rxjs';
import { IDevice } from '../../../../models/interfaces';
import { DevicesService } from '../../../../services/devices.service';

@Component({
  selector: 'app-device-description',
  templateUrl: './device-description.component.html',
  styleUrls: ['./device-description.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceDescriptionComponent implements OnInit, OnDestroy {
  private unsubscriber: Subject<void> = new Subject<void>();
  id!: number;
  device: IDevice = { name: "", id: this.id, year: 0, description: '', isBooked: false, bookings: [] };
  constructor(
    private devicesService: DevicesService,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.devicesService.getDeviceById(this.id)
      .pipe(takeUntil(this.unsubscriber), first())
      .subscribe(device => {
        this.device = device;
        this.ref.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  get isHistoryEmpty() {
    return this.device.bookings.length === 0;
  }

}
