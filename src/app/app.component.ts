import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mode = 'customers';

  title = 'BoilerApp';

  toggleTableView() {
    if(this.mode === 'customers') {
      this.mode = 'employees';
    } else {
      this.mode = 'customers';
    }
  }
}
