import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { JqueryComponent } from './jquery/jquery.component';
import { HibaComponent } from './hiba/hiba.component';
import { FeladatComponent } from './feladat/feladat.component';

const routes: Routes = [
  {path:"bootstrap",component:BootstrapComponent},
  {path:"jquery",component:JqueryComponent},
  {path:"feladat",component:FeladatComponent},
  {path:"",redirectTo:"feladat",pathMatch:"full"},
  {path:"**",component:HibaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
