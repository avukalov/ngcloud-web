import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription, filter, tap } from 'rxjs';
import { debug } from '@app/common';

@Component({
  selector: 'app-check-auth',
  template: `<div></div>`,
})
export class CheckAuthComponent implements OnInit, OnDestroy {

  private sub$: Subscription;

  constructor(private authService: AuthService) {
    this.sub$ = this.authService.authData
      .pipe(
        filter(authData => authData == null),
        debug("CheckAuthComponent"),
        tap(() => this.authService.getUser())
      ).subscribe();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
  }
}
