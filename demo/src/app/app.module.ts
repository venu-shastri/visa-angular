// How to define Module Content like....components
//Define Metadata
//use built -in angular decorator called @NgModule

import {NgModule} from '@angular/core'
//When Agular-app Bootstraped in Browser
import {BrowserModule} from '@angular/platform-browser'
import {LayoutModule} from './layout/layout.module'

import {AppComponent} from './app.component'
import {HeaderComponent} from './layout/header/header.component'
import { FooterComponent } from './layout/footer/footer.component'
import { ContentComponent } from './layout/content/content.component'

@NgModule({
  declarations:[AppComponent], //Declare Components.....
  bootstrap:[AppComponent,HeaderComponent,FooterComponent,ContentComponent], // BootStrap Components
  imports:[BrowserModule,LayoutModule] // List Module Dependency

})
export class AppModule{

}
