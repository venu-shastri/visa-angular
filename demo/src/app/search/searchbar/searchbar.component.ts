import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search-bar-comp',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchKey:string;
  @ViewChild('searchKeyText')
  textBoxReference;

  //output property - event type
  @Output()
  searchKeyChanged=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }
  onSearch(){

    //Notify Host Component - publish changes
    //this.searchKeyChanged.emit(this.searchKey);
    this.searchKeyChanged.emit(this.textBoxReference.nativeElement.value);
  }

}
