import { TestBed, inject } from '@angular/core/testing';

import { InvoiceServiceService } from './invoice-service';

describe('InvoiceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceServiceService]
    });
  });

  it('should be created', inject([InvoiceServiceService], (service: InvoiceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
