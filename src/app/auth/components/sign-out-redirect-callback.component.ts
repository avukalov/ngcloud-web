import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

// import { Store } from '@ngrx/store';
// import { AuthActions } from "@app/core/store/auth/auth.actions"

@Component({
  selector: 'app-sign-out-redirect-callback',
  template: `<div></div>`,
})
export class SignOutRedirectCallbackComponent {

  constructor(private authService: AuthService) { 
    this.authService.signoutRedirectCallback();
  }

}
