import { Component } from '@angular/core';
import { SidebarService } from '@app/drive/sidebar.service';

@Component({
  selector: 'app-drive-layout',
  templateUrl: './drive-layout.component.html',
  styleUrls: ['./drive-layout.component.scss']
})
export class DriveLayoutComponent {
  showFiller = false;
  infoBarOpened = true;
  constructor(private sidebarService: SidebarService) {
    this.sidebarService.toggleInfoBar.subscribe(() => {
      this.infoBarOpened = !this.infoBarOpened
    })
    
  }
}
