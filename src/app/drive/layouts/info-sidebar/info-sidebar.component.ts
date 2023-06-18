import { Component } from '@angular/core';
import { SidebarService } from '@app/drive/sidebar.service';

@Component({
  selector: 'app-info-sidebar',
  templateUrl: './info-sidebar.component.html',
  styleUrls: ['./info-sidebar.component.scss']
})
export class InfoSidebarComponent {

  constructor(private sidebarService: SidebarService) { }

  toggle(){
    this.sidebarService.toggleInfoBar.emit(null);
  }
}
