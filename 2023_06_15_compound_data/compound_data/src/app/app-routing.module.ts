import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { ObjectComponent } from './object/object.component';
import { HibaComponent } from './hiba/hiba.component';

const routes: Routes = [
  {path:"array",component:ArrayComponent},
  {path:"object",component:ObjectComponent},
  {path:"",redirectTo:"array",pathMatch:"full"},
  {path:"**",component:HibaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
