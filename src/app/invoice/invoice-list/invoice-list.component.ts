import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  receipts : any[]=[];
total:number=0;
    constructor(private _router:Router) {   
    }

  ngOnInit() {
      this.bindList();
  }

 //navigate to new inovice
  addNewInv():void{
        this._router.navigate(['./invoice-detail'])
  }
//bind list of invoices
    bindList():void{
   var temp=JSON.parse(localStorage.getItem("recipts"));
   temp.forEach(x => {
    this.receipts.push(x);
    this.total += x.total
  });
      
   }


    // set(){

    //   let localStorage = window.localStorage;
    //   // localStorage.setItem("name", "emad");
    //  }
// remove(){
//  let localStorage = window.localStorage;
//   localStorage.removeItem("name");
// }
   

}
