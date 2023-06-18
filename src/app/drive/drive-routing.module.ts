import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriveLayoutComponent } from './components';
import { MyDriveComponent } from './components/my-drive/my-drive.component';
import { ExplorerComponent } from './components/explorer/explorer.component';


const DRIVE_ROUTES: Routes = [
  { path: '', redirectTo: '/drive/my-drive/folder', pathMatch: 'full' }, // Set first, if you want layout behavior
  { 
    path: '',
    component: DriveLayoutComponent,
    children: [
      { 
        path: 'my-drive', 
        component: MyDriveComponent,
        children: [
          { path: 'folder', component: ExplorerComponent }
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(DRIVE_ROUTES)],
  exports: [RouterModule]
})
export class DriveRoutingModule { }