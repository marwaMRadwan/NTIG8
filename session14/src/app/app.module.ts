import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/users/register/register.component';
import { LoginComponent } from './pages/users/login/login.component';
import { ProfileComponent } from './pages/users/profile/profile.component';
import { AllComponent } from './pages/doctors/all/all.component';
import { SingleComponent } from './pages/doctors/single/single.component';
import { SpcializeComponent } from './pages/doctors/spcialize/spcialize.component';
import { SinglespcializeComponent } from './pages/doctors/singlespcialize/singlespcialize.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AllComponent,
    SingleComponent,
    SpcializeComponent,
    SinglespcializeComponent,
    NavComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
