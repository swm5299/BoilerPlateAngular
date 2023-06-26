import { BehaviorSubject, Observable } from 'rxjs';

import { Customer } from '../models/customer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees$ = new BehaviorSubject<Customer[]>([]);

  constructor() {
    const employees = [
      new Customer('Jill Kucan', '870 Pendergast Drive', '5617224102', '11413'),
      new Customer('Camilla Wibke', '374 Second Drive', '2129620634', '54901'),
      new Customer('Vinzenz Erich', '293 Henry Street', undefined, '08021'),
      new Customer('Gabriel Bettina', '657 Shadow Brook Ave', '8531257420', '11369'),
      new Customer('Marta Aleksandra', '9456 East Locust Ave', '6721089846', '45040')
    ];

    this.employees$.next(employees);
  }

  employeeList(): Observable<Customer[]> {
    return this.employees$.asObservable();
  }
}
