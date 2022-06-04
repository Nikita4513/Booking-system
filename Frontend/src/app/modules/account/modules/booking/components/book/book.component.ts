import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { first, Subject, takeUntil } from 'rxjs';
import { IDevice } from 'src/app/modules/account/models/interfaces';
import { DevicesService } from 'src/app/modules/account/services/devices.service';

@Component({
  selector: 'app-book-device',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookDeviceComponent implements OnInit, OnDestroy {

  private unsubscriber: Subject<void> = new Subject<void>();
  id!: number;
  device: IDevice = { name: "", id: this.id, year: 0, description: '', isBooked: false, bookings: [] };

  bookForm = new FormGroup({
    start: new FormControl(''),
    end: new FormControl('', [Validators.required]),
    comment: new FormControl()
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private devicesService: DevicesService,
  ) {
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.devicesService.getDeviceById(this.id).pipe()
      .subscribe(device => {
        this.device = device;
      })
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  onBook() {
    this.devicesService.bookDevice({
      id: this.id,
      start: new Date().toISOString().slice(0, 16),
      end: this.bookForm.value.end,
      comment: this.bookForm.value.comment,
    }).pipe(takeUntil(this.unsubscriber), first())
      .subscribe(
        _ => {
          this.router.navigate(['/user'])
        },
        _ => alert('error')
      );
  }

  get today(): string {
    return new Date().toISOString().split("T")[0];
  }

  get isDateEarlierToday() : boolean {
    return Date.parse(this.bookForm.value.end) <= Date.parse(new Date().toISOString())
  }
}
