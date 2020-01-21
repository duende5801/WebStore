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
      price: '$40.00',
      quantity: 0,
    },
    {
      img: 'assets/phone-cases/case2.jpg',
      name: 'PhoneCase 2',
      phone: 'iPhone11 Max',
      price: '$40.00',
      quantity: 0,
    },
    {
      img: 'assets/phone-cases/case3.jpg',
      name: 'PhoneCase 3',
      phone: 'iPhone11 Max',
      price: '$40.00',
      quantity: 0,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
