import {Component} from '@angular/core';

/*add on this page: variables and functions*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!'
  contact;

  constructor(){
    this.contact={firstName: 'Kalle', lastName: 'Ankka', phone: '123 4578', streetAddress: 'Kenopolku 102', city: 'Peräkylä'}
  }


}
