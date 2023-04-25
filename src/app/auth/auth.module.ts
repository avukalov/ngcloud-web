import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckAuthComponent, SignOutRedirectCallbackComponent, SigninRedirectCallbackComponent } from './components';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    CheckAuthComponent,
    SignOutRedirectCallbackComponent,
    SigninRedirectCallbackComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  exports: [CheckAuthComponent]
})
export class AuthModule { }
