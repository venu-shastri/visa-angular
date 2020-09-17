import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {SearchbarComponent} from '../searchbar/searchbar.component'
import { ApiSearchService } from '../services/apiSearch.service';

@Component({
  selector: 'search-panel-comp',
  templateUrl: './searchpanel.component.html',
  styleUrls: ['./searchpanel.component.css']
})
export class SearchpanelComponent implements OnInit {

  searchResult:string;

  @ViewChild(SearchbarComponent)
  searchBarComp:SearchbarComponent;

  constructor(@Inject('apilogger') public logger, public searchService:ApiSearchService) { }

  ngOnInit(): void {
  }

  onSearchKeyChanged(payload){

    //Invoke Search Service
    this.logger.write(`Invoking Search Service -  key ${payload} `);
    this.searchResult=` Serach Result for key ${payload} result found`;
    this.logger.write  (` Key From ViewChild ${this.searchBarComp.searchKey}`);


  }
}
