import { Injectable } from '@angular/core';
import { PhoneCase } from './interfaces/phone-case';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: PhoneCase[] = [
    {
      img: 'assets/phone-cases/case1.png',
      name: 'PhoneCase 1',
      phone: 'iPhone',
      description: 'cool case1',
      price: 40,
      rating: 5,
    },
    {
      img: 'assets/phone-cases/case2.jpg',
      name: 'PhoneCase 2',
      phone: 'iPhone',
      description: 'cool case2',
      price:  40,
      rating: 4,
    },
    {
      img: 'assets/phone-cases/case3.jpg',
      name: 'PhoneCase 3',
      phone: 'iPhone',
      description: 'cool case3',
      price: 40,
      rating: 3,
    },
    {
      img: 'assets/phone-cases/case4.jpg',
      name: 'PhoneCase 4',
      phone: 'iPhone',
      description: 'cool case4',
      price: 40,
      rating: 4.5,
    },
    {
      img: 'assets/phone-cases/case5.jpg',
      name: 'PhoneCase 5',
      phone: 'iPhone',
      description: 'cool case5',
      price:  40,
      rating: 4.2,
    },
    {
      img: 'assets/phone-cases/case6.jpg',
      name: 'PhoneCase 6',
      phone: 'iPhone',
      description: 'cool case6',
      price: 40,
      rating: 3.7,
    },
    {
      img: 'assets/phone-cases/case7.png',
      name: 'PhoneCase 7',
      phone: 'iPhone',
      description: 'cool case7',
      price: 40,
      rating: 3.4,
    },
    {
      img: 'assets/phone-cases/case8.jpg',
      name: 'PhoneCase 8',
      phone: 'iPhone',
      description: 'cool case8',
      price:  40,
      rating: 4.1,
    },
    {
      img: 'assets/phone-cases/case9.jpg',
      name: 'PhoneCase 9',
      phone: 'iPhone',
      description: 'cool case9',
      price: 40,
      rating: 4.9,
    },
    {
      img: 'assets/phone-cases/case1.png',
      name: 'PhoneCase 1',
      phone: 'Samsung',
      description: 'cool case1',
      price: 40,
      rating: 5,
    },
    {
      img: 'assets/phone-cases/case2.jpg',
      name: 'PhoneCase 2',
      phone: 'Samsung',
      description: 'cool case2',
      price:  40,
      rating: 4,
    },
    {
      img: 'assets/phone-cases/case3.jpg',
      name: 'PhoneCase 3',
      phone: 'Samsung',
      description: 'cool case3',
      price: 40,
      rating: 3,
    },
    {
      img: 'assets/phone-cases/case4.jpg',
      name: 'PhoneCase 4',
      phone: 'Samsung',
      description: 'cool case4',
      price: 40,
      rating: 4.5,
    },
    {
      img: 'assets/phone-cases/case5.jpg',
      name: 'PhoneCase 5',
      phone: 'Samsung',
      description: 'cool case5',
      price:  40,
      rating: 4.2,
    },
    {
      img: 'assets/phone-cases/case6.jpg',
      name: 'PhoneCase 6',
      phone: 'Samsung',
      description: 'cool case6',
      price: 40,
      rating: 3.7,
    },
    {
      img: 'assets/phone-cases/case7.png',
      name: 'PhoneCase 7',
      phone: 'Samsung',
      description: 'cool case7',
      price: 40,
      rating: 3.4,
    },
    {
      img: 'assets/phone-cases/case8.jpg',
      name: 'PhoneCase 8',
      phone: 'Samsung',
      description: 'cool case8',
      price:  40,
      rating: 4.1,
    },
    {
      img: 'assets/phone-cases/case9.jpg',
      name: 'PhoneCase 9',
      phone: 'Samsung',
      description: 'cool case9',
      price: 40,
      rating: 4.9,
    },
    {
      img: 'assets/phone-cases/case1.png',
      name: 'PhoneCase 1',
      phone: 'Google',
      description: 'cool case1',
      price: 40,
      rating: 5,
    },
    {
      img: 'assets/phone-cases/case2.jpg',
      name: 'PhoneCase 2',
      phone: 'Google',
      description: 'cool case2',
      price:  40,
      rating: 4,
    },
    {
      img: 'assets/phone-cases/case3.jpg',
      name: 'PhoneCase 3',
      phone: 'Google',
      description: 'cool case3',
      price: 40,
      rating: 3,
    },
    {
      img: 'assets/phone-cases/case4.jpg',
      name: 'PhoneCase 4',
      phone: 'Google',
      description: 'cool case4',
      price: 40,
      rating: 4.5,
    },
    {
      img: 'assets/phone-cases/case5.jpg',
      name: 'PhoneCase 5',
      phone: 'Google',
      description: 'cool case5',
      price:  40,
      rating: 4.2,
    },
    {
      img: 'assets/phone-cases/case6.jpg',
      name: 'PhoneCase 6',
      phone: 'Google',
      description: 'cool case6',
      price: 40,
      rating: 3.7,
    },
    {
      img: 'assets/phone-cases/case7.png',
      name: 'PhoneCase 7',
      phone: 'Google',
      description: 'cool case7',
      price: 40,
      rating: 3.4,
    },
    {
      img: 'assets/phone-cases/case8.jpg',
      name: 'PhoneCase 8',
      phone: 'Google',
      description: 'cool case8',
      price:  40,
      rating: 4.1,
    },
    {
      img: 'assets/phone-cases/case9.jpg',
      name: 'PhoneCase 9',
      phone: 'Google',
      description: 'cool case9',
      price: 40,
      rating: 4.9,
    }
  ];

  constructor() { 

  }
  getProducts(): PhoneCase[]{
      return this.products;
  }
}
