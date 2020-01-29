import { Component, OnInit } from '@angular/core';
import { PhoneCase } from 'src/app/shared/interfaces/phone-case';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { CartItem } from 'src/app/shared/interfaces/cart-item';
import { CartService } from 'src/app/shared/cart.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  val: number;
  phoneType: string;
  products: PhoneCase[];
  cart: CartItem[] =[];
  constructor(private router: ActivatedRoute, private dService: DataService, private cService: CartService, private messageService: MessageService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
    this.phoneType = this.router.snapshot.paramMap.get('id');
    this.products = this.filterProducts(this.phoneType);
  }
  
  filterProducts(x: string): PhoneCase[] {
    return this.products.filter(products => products.phone === this.phoneType);
  }

  addToCart(product: PhoneCase){
    //Add to cart button - first push into an empty array above then apply setCartItem from cService
    this.cart.push(product);
    this.cService.setCartItems(this.cart);
    //this.messageService.add({key: 'myKey1', severity:'success', summary: 'Summary Text', detail: 'Detail Text'});
    console.log("this is the add to cart click", product);
    console.log("this is the cart[]", this.cart)
  //   this.cart = [
  //     {
  //     id: product.id,
  //     img: product.img,
  //     name: product.name,
  //     phone: product.phone,
  //     description: product.description,
  //     price: product.price,
  //     rating: product.rating,
  //     quantity: product.quantity
  //   }
  // ];
  }

}
