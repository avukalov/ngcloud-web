import { Component } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = 'ngcloud-web';

  constructor(public authService: AuthService) {
  }

  login = () => this.authService.signInRedirect();
  logout = () => this.authService.signOutRedirect();
}
