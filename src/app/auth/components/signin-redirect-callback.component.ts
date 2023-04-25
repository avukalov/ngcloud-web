import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

// import { Store } from '@ngrx/store';
// import { AuthActions } from '@app/core/store/auth/auth.actions';


@Component({
  selector: 'app-signin-redirect-callback',
  template: `<div></div>`,
})
export class SigninRedirectCallbackComponent {

  constructor(private authService: AuthService) { 
    this.authService.signinRedirectCallback();
  }
}
