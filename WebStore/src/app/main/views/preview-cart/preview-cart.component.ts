import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-preview-cart',
  templateUrl: './preview-cart.component.html',
  styleUrls: ['./preview-cart.component.scss']
})
export class PreviewCartComponent implements OnInit {
  cartTotal = 0;
  tax = 0;
  total = 0;

  constructor(private cService: CartService) { }

  ngOnInit() {
    this.cService.$cartTotal.subscribe(total => {
      this.cartTotal = total;
      this.tax = this.cartTotal * 0.09;
      this.total = this.cartTotal + this.tax;
    });
  }

}
