import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriveLayoutComponent } from './components';
import { MaterialsModule } from '@app/materials/materials.module';
import { DriveRoutingModule } from './drive-routing.module';
import { MyDriveComponent } from './components/my-drive/my-drive.component';
import { SidebarService } from './sidebar.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DriveSidenavComponent } from './components/drive-sidenav/drive-sidenav.component';
import { InfoSidebarComponent } from './components/info-sidebar/info-sidebar.component';
import { MyDriveToolbarComponent } from './components/my-drive-toolbar/my-drive-toolbar.component';
import { MyDriveListViewComponent } from './components/my-drive-list-view/my-drive-list-view.component';



@NgModule({
  declarations: [
    DriveLayoutComponent,
    MyDriveComponent,
    DriveSidenavComponent,
    InfoSidebarComponent,
    MyDriveToolbarComponent,
    MyDriveListViewComponent
  ],
  imports: [
    CommonModule,

    FlexLayoutModule,
    MaterialsModule,
    
    DriveRoutingModule
  ],
  providers: [SidebarService]
})
export class DriveModule { }
