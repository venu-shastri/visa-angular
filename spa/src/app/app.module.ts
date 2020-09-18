import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AccountsModule} from './accounts/accounts.module';
import { HomeComponent } from './home/home.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component'
import { UserCanDeactivate } from './route-guards-services/routeDeactivte.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountsModule,

  ],
  providers: [UserCanDeactivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
