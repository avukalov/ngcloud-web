import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarService } from '@app/drive/sidebar.service';

@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrls: ['./my-drive.component.scss']
})
export class MyDriveComponent {

  constructor(private sidebarService: SidebarService){}

  toggle(){
    this.sidebarService.toggleInfoBar.emit(null);
  }
}
