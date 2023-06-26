
export class Customer {
  name: string;
  address: string;
  phoneNumber: string;
  zipCode: string;

  constructor(name: string, address: string, phoneNumber?: string, zipCode?: string) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber || '';
    this.zipCode = zipCode || '-';
  }
}
