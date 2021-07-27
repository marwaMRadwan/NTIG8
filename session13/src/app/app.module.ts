import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { XRoutingRoutingModule } from './x-routing/x-routing-routing.module'

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { RegisterComponent } from './pages/register/register.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { HomeComponent } from './pages/home/home.component';
import { Err404Component } from './pages/err404/err404.component';
import { DCompComponent } from './d-comp/d-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    RegisterComponent,
    DoctorsComponent,
    HomeComponent,
    Err404Component,
    DCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    XRoutingRoutingModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
