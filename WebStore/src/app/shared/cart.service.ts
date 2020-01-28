import { Injectable } from '@angular/core';
import { CartItem } from './interfaces/cart-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = []
  constructor() { }

  getCartItems(): CartItem[] {
    return this.cart;
  }

}
