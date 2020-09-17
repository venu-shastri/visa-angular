import {Subject} from 'rxjs'
export class ApiSearchService{

  private searchResultSubject=new Subject<string>();
  searchResultObservableStrem=this.searchResultSubject.asObservable();

  searchByIdAsync(searchKey){

    //api - async call
    setTimeout(()=>{

      let searchResult=`Search Result for ${searchKey}`;
      this.searchResultSubject.next(searchResult);

    },5000);

  }

}
