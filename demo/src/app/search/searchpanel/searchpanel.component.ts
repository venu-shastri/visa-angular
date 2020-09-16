import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'search-panel-comp',
  templateUrl: './searchpanel.component.html',
  styleUrls: ['./searchpanel.component.css']
})
export class SearchpanelComponent implements OnInit {

  searchResult:string;
  constructor(@Inject('apilogger') public logger) { }

  ngOnInit(): void {
  }

  onSearchKeyChanged(payload){

    //Invoke Search Service
    this.logger.write(`Invoking Search Service -  key ${payload} `);
    this.searchResult=` Serach Result for key ${payload} result found`;


  }
}
