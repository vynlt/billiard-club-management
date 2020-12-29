import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';

import { LoginGuard } from './guards/login.guard';
import { NotLoginGuard } from './guards/not-login.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginGuard, NotLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
