import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/interfaces/cart-item';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-preview-cart',
  templateUrl: './preview-cart.component.html',
  styleUrls: ['./preview-cart.component.scss']
})
export class PreviewCartComponent implements OnInit {
  checkout: CartItem [] = [];

  constructor(private cService: CartService) {        //apply the return function in cService
        for (let product of this.checkout) {
          this.subtotal += product.price;
        }
        this.tax = this.subtotal * 0.09;
        this.total = this.subtotal + this.tax; }
  subtotal: number = 0;
  tax: number = 0;
  total: number = 0;

  ngOnInit() {

  }

}
