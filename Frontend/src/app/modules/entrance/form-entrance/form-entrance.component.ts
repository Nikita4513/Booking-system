import { formatPercent } from '@angular/common';
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

  private readonly emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.pattern(this.emailRegex)),
    password: new FormControl('', Validators.minLength(6))
  });

  constructor(
    private account: AccountService,
    private router: Router
    ) {
    }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.account.login(
      this.loginForm.controls['email'].value,
      this.loginForm.controls['password'].value,
      true)
      .subscribe(
      _ => {
        this.router.navigate(['/account/devices'])
      }
    );
  }
}