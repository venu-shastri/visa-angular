import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-result-comp',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  //Input properties
  @Input()
  result:string; // value will be set by host component
  constructor() { }

  ngOnInit(): void {
  }

}
