import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule   } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './invoice/invoice-details/invoice-details.component';//data table

@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    InvoiceDetailsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule ,
     HttpModule,
     RouterModule.forRoot([
       {path:'invoice-list' , component: InvoiceListComponent},
       {path:'invoice-detail' , component: InvoiceDetailsComponent},
  
 {path:'',redirectTo:'InvoiceListComponent',pathMatch:'full'},
  {path:'**' ,component:InvoiceListComponent}

])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
