import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntranceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
