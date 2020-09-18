import { NgModule, Component } from '@angular/core';
import {Routes,RouterModule} from'@angular/router'
import { LoginComponent } from './accounts/login/login.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import {UserCanDeactivate} from './route-guards-services/routeDeactivte.service'
//Route Configuration - Route States

const appRoutes:Routes=[

   /*Route State*/ {path:"" ,redirectTo:'home' , pathMatch:'full'},
   /*Route State */ {path:"home",component:HomeComponent,children:[
    /*Child Route State*/ {path:'login', component:LoginComponent},
    /*Child Route State */ {path:'signup',component:SignupComponent}

   ]},
   /*Route State */ {
     path:"dashboard/:user",
      component:MainDashboardComponent,
      /*Associate Guard with route state */
      canDeactivate:[UserCanDeactivate]}
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
