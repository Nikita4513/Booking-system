import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IDevice } from 'src/app/modules/account/models/interfaces';
import { DevicesService } from 'src/app/modules/account/services/devices.service';

@Component({
  selector: 'app-book-device',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookDeviceComponent implements OnInit {

  id!: number;
  device: IDevice = { name: "", id: this.id, year: 0, description: '', bookings: [] };

  bookForm = new FormGroup({
    start: new FormControl(''),
    end: new FormControl(),
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

  onBook() {
    this.devicesService.bookDevice({
      id: this.id,
      start: this.bookForm.value.start,
      end: this.bookForm.value.end,
      comment: this.bookForm.value.comment,
    }).pipe()
      .subscribe(
        res => {
          this.router.navigate(['/user'])
          console.log(res)
        },
        _ => alert('error')
      );
  }

  get today(): string {
    return new Date().toISOString().split("T")[0];
  }
}
