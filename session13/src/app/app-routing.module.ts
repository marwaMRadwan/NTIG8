import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DCompComponent } from './d-comp/d-comp.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { Err404Component } from './pages/err404/err404.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"doctors", component:DoctorsComponent},
  {path:"register", component:RegisterComponent},
  {path:"user",component:DCompComponent, 
    children:[
      {path:":id", component:DCompComponent}
    ]
  }
  //  {path:"**", component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
