import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

// import { Store } from '@ngrx/store';
// import { AuthActions } from '@app/core/store/auth/auth.actions';


@Component({
  selector: 'app-signin-redirect-callback',
  template: `<div></div>`,
})
export class SigninRedirectCallbackComponent {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { 
    // this.route.queryParams
    //   .subscribe(params => {
    //     console.log(params); // { orderby: "price" }
    //     if (params.error === 'access_denied') {
          
    //     }
    //   }
    // );
    this.authService.signinRedirectCallback();
  }
}
