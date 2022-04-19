import { AbsoluteSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-form-entrance',
  templateUrl: './form-entrance.component.html',
  styleUrls: ['./form-entrance.component.css']
})
export class FormEntranceComponent implements OnInit {

  authForm!: FormGroup;

  constructor(
    private account: AccountService,
    private router: Router
    ) {
     }

  ngOnInit(): void {
  }

  login(){
    this.account.login("fuck", "fuck", true).subscribe(
      _ => {
        this.router.navigate(['/account/devices'])
      }
    );
  }
}
