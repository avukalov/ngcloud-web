import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriveLayoutComponent } from './components';
import { MyDriveComponent } from './components/my-drive/my-drive.component';


const DRIVE_ROUTES: Routes = [
  { path: '', redirectTo: '/drive/my-drive', pathMatch: 'full' }, // Set first, if you want layout behavior
  { 
    path: '',
    component: DriveLayoutComponent,
    children: [
      { path: 'my-drive', component: MyDriveComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(DRIVE_ROUTES)],
  exports: [RouterModule]
})
export class DriveRoutingModule { }