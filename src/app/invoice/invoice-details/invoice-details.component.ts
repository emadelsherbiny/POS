import { Component, OnInit } from '@angular/core';
import { InvoiceService } from "app/invoice/invoice-service";
import {Router} from '@angular/router';
import { IInvoice } from "app/invoice/iinvoice";

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {
  items:IInvoice[];
  receipts:IInvoice[]=[];
  total:number=0;
  taxes:number=0;
  net:number=0;

  constructor(private _invoiceServ :InvoiceService ,private _router: Router) { }

  ngOnInit() {
this.getItems();
  }

  //add all items to receipt
addAll(){
   
  for (var index = 0; index < this.items.length; index++) {
    this.addItem(this.items[index].name);
    
  }
}

//add one item to list
addItem(item:string){
  /* 
   for security reason we didn't get the price
  from client side we get it from api but 
  it just for demo
  */
 
for (var index = 0; index < this.items.length; index++) {
 
 if (this.items[index].name ==item) {
   if (this.items[index].number == undefined) {
     this.items[index].number=1;
     this.receipts.push(Object.assign({}, this.items[index]));
   } else{
     for (var j = 0; j < this.receipts.length; j++) {
       if (this.receipts[j].name == item) {
          this.receipts[j].number +=1;
       this.receipts[j].price +=this.items[index].price;
       
       }    
     }   
    }   
 }   
}
this.calc();
}
 //calculate the receipt
 calc():void{
  this.total=0;
  this.net=0;
for (var index = 0; index < this.receipts.length; index++) {
    this.total +=this.receipts[index].price;
}
this.taxes=((this.total * 10)/100);
 this.net=this.total +this.taxes;
}
 //navigate to invoice list
goBack(){
  this.set();
  this._router.navigate(['./invoice-list'])
}

//save data to localsorage
set(){
    let localStorage = window.localStorage; 
    let objects = JSON.parse(localStorage.getItem("recipts"));
    if (objects == undefined) {
          objects=[];
          let temp={'id':1,'total':this.net};
          objects.push(temp);
    }
    else
        {
          var flag =Math.max.apply(Math,objects.map(function(o){return o.id;})) ;
          objects.push({'id':flag +1,'total':this.net});
        }
        localStorage.setItem("recipts", JSON.stringify(objects));
 
    }
//bind item to the menu
  getItems( ):void{
    debugger
this._invoiceServ
    .getJSON()
    .subscribe(
        result => this.succsess(result),
        error => this.errorMessage(error)
);
  }
 private   errorMessage(error : any){
   debugger
    console.log(error);

    }
private   succsess(result : any){
   this.items=result;
       console.log(JSON.stringify(result));

    }
    //end bind items

 

}
