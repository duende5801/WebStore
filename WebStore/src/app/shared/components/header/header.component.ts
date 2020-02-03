import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { PhoneCase } from '../../interfaces/phone-case';

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

  constructor(private cService: CartService) {
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
  removeFromCart(item, index) {
    this.cService.removeProduct(item, index);
  }


}
