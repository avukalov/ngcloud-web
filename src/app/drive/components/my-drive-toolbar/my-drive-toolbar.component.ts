import { Component } from '@angular/core';
import { SidebarService } from '@app/drive/sidebar.service';

@Component({
  selector: 'app-my-drive-toolbar',
  templateUrl: './my-drive-toolbar.component.html',
  styleUrls: ['./my-drive-toolbar.component.scss']
})
export class MyDriveToolbarComponent {
  
  constructor(private sidebarService: SidebarService){}

  toggle(){
    this.sidebarService.toggleInfoBar.emit(null);
  }
}
