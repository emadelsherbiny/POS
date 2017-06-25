import { Component } from '@angular/core';
import { InvoiceService } from "app/invoice/invoice-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[InvoiceService]
})
export class AppComponent {
  title = 'app';
}
