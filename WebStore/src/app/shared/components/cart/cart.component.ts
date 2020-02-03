import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/interfaces/cart-item';
import { CartService } from 'src/app/shared/cart.service';
import { PhoneCase } from '../../interfaces/phone-case';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  cartItems: PhoneCase [] = [];

  constructor(private cService: CartService) { }

  ngOnInit() {
    // apply the return function in cService
    this.cService.$cartItems.subscribe(items => {
      this.cartItems = items;
      });
  }
  removeItem(item, index) {
    this.cService.removeProduct(item, index);
  }

}
