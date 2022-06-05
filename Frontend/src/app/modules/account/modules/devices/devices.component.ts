import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { first, Subject, takeUntil } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { IDevice, IDevices } from '../../models/interfaces';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevicesComponent {

  constructor(
  ) {
  }

}
