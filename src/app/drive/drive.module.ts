import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriveLayoutComponent } from './components';
import { MaterialsModule } from '@app/materials.module';
import { DriveRoutingModule } from './drive-routing.module';
import { MyDriveComponent } from './components/my-drive/my-drive.component';
import { SidebarService } from './sidebar.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DriveSidenavComponent } from './components/drive-sidenav/drive-sidenav.component';
import { InfoSidebarComponent } from './components/info-sidebar/info-sidebar.component';
import { MyDriveToolbarComponent } from './components/my-drive-toolbar/my-drive-toolbar.component';
import { MyDriveListViewComponent } from './components/my-drive-list-view/my-drive-list-view.component';
import { FileExplorerComponent } from './components/file-explorer/file-explorer.component';
import { NewFolderDialogComponent } from './modals/new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from './modals/rename-dialog/rename-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxAuthModule } from 'avstack-ngx-auth-dev';



@NgModule({
  declarations: [
    DriveLayoutComponent,
    MyDriveComponent,
    DriveSidenavComponent,
    InfoSidebarComponent,
    MyDriveToolbarComponent,
    MyDriveListViewComponent,
    FileExplorerComponent,
    NewFolderDialogComponent,
    RenameDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialsModule,
    
    // NgxAuthModule.forRoot({ configuration : {
    //   clientId: "b76ac7b9-dfbf-4fab-86cb-598de7e2f7b9",
    //   clientUri: 'http://localhost:4202',
    //   authorityUri: "https://localhost:5005",

    //   redirect_uri: "http://localhost:4202/auth/signin-callback",
    //   silent_redirect_uri: "http://localhost:4202/assets/silent-callback.html",
    //   post_logout_redirect_uri: "http://localhost:4202/auth/signout-callback",
    // }}),    

    DriveRoutingModule
  ],
  providers: [SidebarService]
})
export class DriveModule { }
