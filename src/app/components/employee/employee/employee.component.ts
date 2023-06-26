import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/models/customer.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { PhoneNumberPipe } from 'src/app/pipes/phone-number.pipe';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: Customer[] = [];

  private employeeService: EmployeeService = new EmployeeService();

  constructor(private phoneNumberPipe: PhoneNumberPipe) { }

  ngOnInit(): void {
    this.employeeService.employeeList().subscribe((employees) => {
      this.employees = employees;
    });
  }

  getPhoneNumber(value: string) {
    return this.phoneNumberPipe.transform(value);
  }

  getZipCode(value: string) {
    return `${value}-1TRZ`;
  }
}
