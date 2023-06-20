import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeladatComponent } from './feladat/feladat.component';
import { MintaComponent } from './minta/minta.component';
import { HibaComponent } from './hiba/hiba.component';

const routes: Routes = [
  {path:"oraifeladat",component:FeladatComponent},
  {path:"databinding",component:MintaComponent},
  {path:"",redirectTo:"oraifeladat",pathMatch:"full"},
  {path:"**",component:HibaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
