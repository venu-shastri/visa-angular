import { Component, OnDestroy, OnInit } from '@angular/core';
import{ ActivatedRoute } from'@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit, OnDestroy{

  userName:string=""
  paramSubscription:Subscription;
  constructor(public activeRoute:ActivatedRoute) {
//snapshot

//this.userName=this.activeRoute.snapshot.paramMap.get('user');

   }

  ngOnInit(): void {

    this.paramSubscription=this.activeRoute.paramMap.subscribe((params)=>{

      this.userName=params.get("user");
    });
  }
  ngOnDestroy(){
this.paramSubscription.unsubscribe();

  }


}
