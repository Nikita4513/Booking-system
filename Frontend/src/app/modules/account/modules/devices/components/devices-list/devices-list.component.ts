import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { first, Subject, takeUntil } from 'rxjs';
import { IDevice } from '../../../../models/interfaces';
import { DevicesService } from '../../../../services/devices.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit, OnDestroy {
  public devices!: IDevice[];
  private allDevices!: IDevice[];
  private unsubscriber: Subject<void> = new Subject<void>();
  @Output('filterChange') update = new EventEmitter();
  
  constructor(
    private deviceService: DevicesService
  ) {
      this.deviceService.getAllDevices()
        .pipe(takeUntil(this.unsubscriber), first())
        .subscribe(devices => {
          this.devices = devices;
          this.allDevices = devices;
        });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  public onDropdownItemClick(event: any){
    console.log(event);
    const dropDownMenu = document.querySelector('.dropdown-toggle');
    dropDownMenu!.innerHTML = event.srcElement.outerText;
  }

  public onSearchChanges(value: any) {
    this.devices = this.allDevices.filter(device => device.name.toLowerCase().includes(value.toLowerCase()))
  }
}
