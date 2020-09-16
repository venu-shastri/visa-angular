import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { SearchpanelComponent } from './searchpanel/searchpanel.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchresultComponent } from './searchresult/searchresult.component';



@NgModule({
  declarations: [SearchpanelComponent, SearchbarComponent, SearchresultComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[SearchpanelComponent]
})
export class SearchModule { }
