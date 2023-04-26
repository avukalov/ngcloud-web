import { Component } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
import { SidebarService } from '@app/drive/sidebar.service';

@Component({
  selector: 'app-drive-layout',
  templateUrl: './drive-layout.component.html',
  styleUrls: ['./drive-layout.component.scss']
})
export class DriveLayoutComponent {
  showFiller = false;
  infoBarOpened = false;

  constructor(private sidebarService: SidebarService, public authService: AuthService) {
    this.sidebarService.toggleInfoBar.subscribe(() => {
      this.infoBarOpened = !this.infoBarOpened
    })
    
  }

  logout() {
    this.authService.signOutRedirect();
  }
}
