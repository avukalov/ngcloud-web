import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignOutRedirectCallbackComponent } from './components/sign-out-redirect-callback.component';
import { SigninRedirectCallbackComponent } from './components/signin-redirect-callback.component';

const AUTH_ROUTES: Routes = [
  { 
    path: '',
    children: [
      { path: 'signin-callback', component: SigninRedirectCallbackComponent },
      { path: 'signout-callback', component: SignOutRedirectCallbackComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }