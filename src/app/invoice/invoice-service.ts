import { Injectable, Input } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class InvoiceService {

  constructor(private _http: Http) { }
public getJSON(): Observable<any> {
         return this._http.get("assets/items.json")
                         .map((res:any) => res.json())
                         .catch(this.handleError );

     } 
 

     private   extractData(response : Response){
   debugger
      
     return Observable.throw(response);

    }


 private   handleError(error : Response){
   debugger
     
     return Observable.throw(error);

    }
}
