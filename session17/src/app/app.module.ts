import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { XDirectiveDirective } from './x-directive.directive';
import { MyPipePipe } from './my-pipe.pipe';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    XDirectiveDirective,
    MyPipePipe,
    C1Component,
    C2Component,
    LoginComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
