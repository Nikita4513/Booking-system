import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { first, Subject, Subscription, take, takeUntil } from 'rxjs';
import { IDevice } from '../../../../models/interfaces';
import { DevicesService } from '../../../../services/devices.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit, OnDestroy {
  public devices!: IDevice[];
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(
    private deviceService: DevicesService
  ) {
      deviceService.getAllDevices()
        .pipe(takeUntil(this.unsubscriber), first())
        .subscribe(devices => {
          this.devices = devices;
        });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  onDropdownItemClick(event: any){
    console.log(event);
    const dropDownMenu = document.querySelector('.dropdown-toggle');
    dropDownMenu!.innerHTML = event.srcElement.outerText;
  }

}
