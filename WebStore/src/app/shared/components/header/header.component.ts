import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { PhoneCase } from '../../interfaces/phone-case';
import { UserService } from '../../user.service';

interface Phone {
  name: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  products: Phone[];
  display = false;
  selectedPhone: Phone;

  cartCount = 0;
  cartItems: PhoneCase[] = [];
  showList = false;

  constructor(private cService: CartService, private uService: UserService) {
  }
  ngOnInit() {
    this.products = [
      {name: 'iPhone'}, {name: 'Samsung'}, {name: 'Google'}
    ];
    this.cService.$cartQuantity.subscribe(count => {
      this.cartCount = count;
    });

  }
  formDisplay() {
    this.display = !this.display;
  }
  toggleList() {
    this.showList = !this.showList;
  }
  logIn(userName, password) {
    if (this.uService.checkPassword(userName, password)) {
      alert('Your Logged in');
      
    } else {
      alert('Please try again');
    }
  }


}
