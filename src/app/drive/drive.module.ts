import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '@app/materials.module';
import { DriveRoutingModule } from './drive-routing.module';
import { MyDriveComponent } from './components/my-drive/my-drive.component';
import { SidebarService } from './sidebar.service';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MyDriveToolbarComponent } from './components/my-drive-toolbar/my-drive-toolbar.component';

import { ExFileplorerComponent } from './components/file-explorer-example/file-explorer.component';
import { NewFolderDialogComponent } from './modals/new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from './modals/rename-dialog/rename-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExplorerComponent, ExplorerFileComponent, ExplorerFolderComponent } from './components/explorer/explorer.component';
import { FileUploadButtonComponent } from './components/file-upload-button/file-upload-button.component';
import { HttpClientModule } from "@angular/common/http";
import { DriveLayoutComponent } from "./layouts/drive-layout/drive-layout.component";
import { DriveListViewLayoutComponent } from './layouts/drive-list-view-layout/drive-list-view-layout.component';
import { DriveGridViewLayoutComponent } from './layouts/drive-grid-view-layout/drive-grid-view-layout.component';
import { FolderUploadButtonComponent } from './components/folder-upload-button/folder-upload-button.component';
import { DriveSidenavComponent } from "./layouts/drive-sidenav/drive-sidenav.component";
import { InfoSidebarComponent } from "./layouts/info-sidebar/info-sidebar.component";



@NgModule({
  declarations: [
    DriveLayoutComponent,
    MyDriveComponent,
    DriveSidenavComponent,
    InfoSidebarComponent,
    MyDriveToolbarComponent,
    ExFileplorerComponent,
    NewFolderDialogComponent,
    RenameDialogComponent,

    ExplorerComponent,
    ExplorerFileComponent,
    ExplorerFolderComponent,
    FileUploadButtonComponent,
    DriveListViewLayoutComponent,
    DriveGridViewLayoutComponent,
    FolderUploadButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
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
