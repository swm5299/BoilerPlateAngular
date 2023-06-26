import { BehaviorSubject, Observable } from 'rxjs';

import { Customer } from '../models/customer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers$ = new BehaviorSubject<Customer[]>([]);

  constructor() {
    const customers = [
      new Customer('Joe Kucan', '123 Malibu Lane', '8234569870'),
      new Customer('Bob Burnquist', '856 Hollywood Lane', '9563461243'),
      new Customer('Hank Hill', '1860 Strickland Lane', '9068031450'),
      new Customer('Johnston Green', '716 Topeka Road', undefined),
      new Customer('Dale Gribble', '9670 Propane Ave', '6073421860')
    ];

    this.customers$.next(customers);
  }

  addCustomer(customer: Customer) {
    this.customers$.next([customer, ...this.customers$.value]);
  }

  customerList(): Observable<Customer[]> {
    return this.customers$.asObservable();
  }
}
