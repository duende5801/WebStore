import { Component, OnInit } from '@angular/core';
import { PhoneCase } from 'src/app/shared/interfaces/phone-case';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  val: number = 3;
  products: PhoneCase[] = [
    {
      img: 'assets/phone-cases/case1.png',
      name: 'PhoneCase 1',
      phone: 'iPhone11 Max',
      description: 'cool case1',
      price: 40,
      rating: 5,
    },
    {
      img: 'assets/phone-cases/case2.jpg',
      name: 'PhoneCase 2',
      phone: 'iPhone11 Max',
      description: 'cool case2',
      price:  40,
      rating: 4,
    },
    {
      img: 'assets/phone-cases/case3.jpg',
      name: 'PhoneCase 3',
      phone: 'iPhone11 Max',
      description: 'cool case3',
      price: 40,
      rating: 3,
    },
    {
      img: 'assets/phone-cases/case4.jpg',
      name: 'PhoneCase 4',
      phone: 'iPhone11 Max',
      description: 'cool case4',
      price: 40,
      rating: 4.5,
    },
    {
      img: 'assets/phone-cases/case5.jpg',
      name: 'PhoneCase 5',
      phone: 'iPhone11 Max',
      description: 'cool case5',
      price:  40,
      rating: 4.2,
    },
    {
      img: 'assets/phone-cases/case6.jpg',
      name: 'PhoneCase 6',
      phone: 'iPhone11 Max',
      description: 'cool case6',
      price: 40,
      rating: 3.7,
    },
    {
      img: 'assets/phone-cases/case7.png',
      name: 'PhoneCase 7',
      phone: 'iPhone11 Max',
      description: 'cool case7',
      price: 40,
      rating: 3.4,
    },
    {
      img: 'assets/phone-cases/case8.jpg',
      name: 'PhoneCase 8',
      phone: 'iPhone11 Max',
      description: 'cool case8',
      price:  40,
      rating: 4.1,
    },
    {
      img: 'assets/phone-cases/case9.jpg',
      name: 'PhoneCase 9',
      phone: 'iPhone11 Max',
      description: 'cool case9',
      price: 40,
      rating: 4.9,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
