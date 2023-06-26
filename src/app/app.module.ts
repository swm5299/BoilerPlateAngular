import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent } from './components/customer/customer.component';
import { NgModule } from '@angular/core';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { EmployeeComponent } from './components/employee/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    PhoneNumberPipe,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PhoneNumberPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
