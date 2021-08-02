import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { HomeModule } from './home';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }