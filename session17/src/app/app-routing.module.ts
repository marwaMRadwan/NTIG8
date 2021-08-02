import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C2Component } from './c2/c2.component';
import { G1Guard } from './g1.guard';
import { G2Guard } from './g2.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyGGuard } from './my-g.guard';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'c1', component:C2Component},
  {path:"home", component:HomeComponent, canActivate:[MyGGuard], canDeactivate:[G2Guard]},
  {path:"login",component:LoginComponent},
  {path:"test", component:TestComponent, canDeactivate:[G2Guard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
