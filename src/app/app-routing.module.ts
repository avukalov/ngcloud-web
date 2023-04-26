import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'auth',
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: 'drive',
    loadChildren: () => import("@app/drive/drive.module").then(m => m.DriveModule)
  },
  // { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
    // imports: [RouterModule.forRoot(routes, {useHash: true})],
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }