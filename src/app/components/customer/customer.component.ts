import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { PhoneNumberPipe } from 'src/app/pipes/phone-number.pipe';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private phoneNumberPipe: PhoneNumberPipe) { }

  ngOnInit(): void {
    this.customerService.customerList().subscribe(customers => {
      this.customers = customers;
      console.log(customers);
    });
  }

  addCustomer() {
    this.customerService.addCustomer(new Customer('New Customer', 'New Address', '9874561234'));
  }

  getPhoneNumber(value: string) {
    return this.phoneNumberPipe.transform(value);
  }
}
