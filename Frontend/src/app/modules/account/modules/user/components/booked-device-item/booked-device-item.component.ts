import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first, Subject, takeUntil } from 'rxjs';
import { IBooking } from 'src/app/modules/account/models/interfaces';
import { DevicesService } from 'src/app/modules/account/services/devices.service';
import { DevicesComponent } from '../../../devices/devices.component';

@Component({
  selector: 'app-booked-device-item',
  templateUrl: './booked-device-item.component.html',
  styleUrls: ['./booked-device-item.component.css']
})
export class BookedDeviceItemComponent implements OnInit, OnDestroy {

  private unsubscriber: Subject<void> = new Subject<void>();

  @Input()id!: number;
  @Input()name!: string;
  @Input()year!: number;
  @Input()description!: string;
  @Input()bookings!: IBooking[];

  constructor(
    private devicesService: DevicesService,
    private router: Router
  ) {
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy() : void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  public get lastBooking() : IBooking {
    return this.bookings[this.bookings.length - 1];
  }

  public onReturn() : void {
    const modal = document.getElementById(`my_modal-${this.id}`);
    if (modal) {
      modal.style.display = "block";
    }
  }

  public onCloseModal() : void {
    const modal = document.getElementById(`my_modal-${this.id}`);
    if (modal) {
      modal.style.display = "none";
    }
  }

  public onCancelBooking() {
    const id = this.getCurrentBookingId();
    this.devicesService.cancelBooking(id)
        .pipe(takeUntil(this.unsubscriber), first())
        .subscribe(() => this.router.navigate(['devices']))
  }

  private getCurrentBookingId(): number{
    const currentBooking =  this.bookings.find(x => Date.parse(x.start) <= Date.now() && Date.now() <= Date.parse(x.end));
    return currentBooking? currentBooking.id : -1;
  }
}
