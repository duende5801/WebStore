import { Injectable } from '@angular/core';
import { CartItem } from './interfaces/cart-item';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { PhoneCase } from './interfaces/phone-case';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: PhoneCase[] = [];
  public $cartItems = new BehaviorSubject<PhoneCase[]>(this.cartItems);

  cartTotal = 0;
  $cartTotal = new BehaviorSubject<number>(this.cartTotal);

  cartQuantity = 0;
  $cartQuantity = new BehaviorSubject<number>(this.cartQuantity);

  cart: CartItem[] = [];
  constructor() { }

  addItemsToCart(item: PhoneCase) {
    let cartItem = this.cartItems.find(x => x.id === item.id);
    this.cartQuantity++
    if (cartItem) {
      cartItem.quantity++;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    console.log(this.cartItems);
    this.cartTotal += +item.price;

    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQuantity.next(this.cartQuantity);
  }

  removeProduct(item: PhoneCase, index) {
    this.cartItems.splice(index, 1);
    const totalPrice = item.quantity * +item.price;
    this.cartTotal -= totalPrice;
    this.cartQuantity -= item.quantity;
    
    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQuantity.next(this.cartQuantity);
  }
  
  getCartItems(): CartItem[] {
    return this.cart;
  }
  
  setCartItems(cartItems: CartItem[])
  {
    this.cart = cartItems;
    console.log("I am in cart service", this.cart);
  }
}
