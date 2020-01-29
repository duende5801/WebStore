import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/interfaces/cart-item';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  checkout: CartItem [] = [];

  constructor(private cService: CartService) { }
  subtotal: number = 0;
  tax: number = 0;
  total: number = 0;
  ngOnInit() {
    //apply the return function in cService
    this.checkout = this.cService.getCartItems();
    for (let product of this.checkout) {
      this.subtotal += product.price;
    }
    this.tax = this.subtotal * 0.09;
    this.total = this.subtotal + this.tax;
  }

}
