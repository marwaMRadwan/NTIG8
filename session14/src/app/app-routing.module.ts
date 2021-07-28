import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './pages/doctors/all/all.component';
import { SingleComponent } from './pages/doctors/single/single.component';
import { SinglespcializeComponent } from './pages/doctors/singlespcialize/singlespcialize.component';
import { SpcializeComponent } from './pages/doctors/spcialize/spcialize.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/users/login/login.component';
import { ProfileComponent } from './pages/users/profile/profile.component';
import { RegisterComponent } from './pages/users/register/register.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"users", children:[
    {path:"register", component:RegisterComponent},
    {path:"login", component:LoginComponent},
    {path:"profile", component:ProfileComponent},
  ]},
  {path:"doctors", children:[
    {path:"allDoctors", children:[
      {path:"", component:AllComponent},
      {path:":id", component:SingleComponent}
    ]},
    {path:"allSpcialize",children:[
      {path:"", component:SpcializeComponent},
      {path:":id", component:SinglespcializeComponent}
    ]},
  ]},
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
