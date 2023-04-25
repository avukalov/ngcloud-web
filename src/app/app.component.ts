import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-check-auth></app-check-auth>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {}
