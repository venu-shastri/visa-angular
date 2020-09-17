import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { SearchpanelComponent } from './searchpanel/searchpanel.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import {ApiSearchService} from './services/apiSearch.service'



@NgModule({
  declarations: [SearchpanelComponent, SearchbarComponent, SearchresultComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[SearchpanelComponent],
  providers:[{provide:ApiSearchService,useClass:ApiSearchService}]
})
export class SearchModule { }
