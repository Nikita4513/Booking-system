import { chainedInstruction } from '@angular/compiler/src/render3/view/util';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceItemComponent implements OnInit {
  @Input()id!: number;
  @Input()name!: string;
  @Input()year!: number;
  @Input()description!: string;

  constructor(
  ) {
  }
  ngOnInit(): void {
  }

}
