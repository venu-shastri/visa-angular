import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiSearchService } from '../services/apiSearch.service';

@Component({
  selector: 'search-result-comp',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit , OnDestroy {

  //Input properties
  @Input() /* Within Component - Readonly*/
  result:string; // value will be set by host component

  searchResult:string;

  subscriptionObjRef:Subscription

  @Input()
  service:ApiSearchService
  constructor() { }

  //Life Cycle Hook
  ngOnInit(): void {

    //Initilaization task - Component Intialized
    //Subscribe for Observable Stream
    this.subscriptionObjRef=this.service.searchResultObservableStrem.subscribe((data)=>{

        this.searchResult=data;

    });
  }
  //LifeCycle Hook
  ngOnDestroy(){

    this.subscriptionObjRef.unsubscribe();
  }

}
