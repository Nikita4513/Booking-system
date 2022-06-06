import { formatPercent } from '@angular/common';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first, Subject, takeUntil } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-form-entrance',
  templateUrl: './form-entrance.component.html',
  styleUrls: ['./form-entrance.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormEntranceComponent implements OnInit, OnDestroy {

  public showAlert: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();
  private readonly emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.pattern(this.emailRegex)),
    password: new FormControl('', Validators.minLength(6))
  });

  constructor(
    private account: AccountService,
    private router: Router,
    private ref: ChangeDetectorRef,
    ) {
    }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  public onSubmit(){
    this.account.login(
      this.loginForm.controls['email'].value,
      this.loginForm.controls['password'].value,
      true)
      .pipe(takeUntil(this.unsubscriber), first())
      .subscribe(
      _ => {
        this.router.navigate(['/account/devices'])
      },
      _ => {
        this.showAlert = true;
        this.ref.markForCheck();
      }
    );
  }
}