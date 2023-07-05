import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): unknown {
    if(!value){
      return '-';
    }

    // TODO: Make phone number formatting happen!
    return value;
  }
}
