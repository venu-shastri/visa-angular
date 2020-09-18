import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MainDashboardComponent } from '../main-dashboard/main-dashboard.component';

Injectable({
  providedIn:"root"
})
//Service
export class UserCanDeactivate implements CanDeactivate<MainDashboardComponent> {
  //Called Implicitly- when associated to activated
canDeactivate() {
  //Popup Confirm Window - returns true/fasle based on user choice
	return window.confirm('Do you want to continue?');
	}
}
