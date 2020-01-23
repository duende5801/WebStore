import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  checkout: any[] = [
    {
      img: 'assets/phone-cases/case1.png',
      name: 'PhoneCase 1',
      phone: 'iPhone11 Max',
      description: 'cool case1',
      price: 40,
      rating: 5,
      quantity: 1,
    },
    {
      img: 'assets/phone-cases/case2.jpg',
      name: 'PhoneCase 2',
      phone: 'iPhone11 Max',
      description: 'cool case2',
      price:  40,
      rating: 4,
      quantity: 1,
    },
    {
      img: 'assets/phone-cases/case3.jpg',
      name: 'PhoneCase 3',
      phone: 'iPhone11 Max',
      description: 'cool case3',
      price: 40,
      rating: 3,
      quantity: 1,
    }
  ];

  constructor() { }
  subtotal: number = 0;
  tax: number = 0;
  total: number = 0;
  ngOnInit() {
    for(let product of this.checkout) {
      this.subtotal += product.price;
    }
    this.tax=this.subtotal*0.09;
    this.total=this.subtotal+this.tax
  }

}
