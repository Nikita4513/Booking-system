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
    debugger
    this.authForm = new FormGroup({
      email: new FormControl("emailg", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.password, [
        Validators.email
      ])
    });
    
    this.authForm.statusChanges.subscribe(
      _ => console.log(1)
    );
  }

  login(){
    this.account.login("fuck", "fuck", true).subscribe(
      _ => this.router.navigate(['/devices'])
    );
  }

  get email() {
    const res = this.authForm.get('email');
    console.log(res);
    return res;
  }

  get password() {
    const res = this.authForm.get('password');
    console.log(res);
    return res;
  }

}
