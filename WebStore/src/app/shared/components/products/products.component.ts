import { Component, OnInit, OnChanges } from '@angular/core';
import { PhoneCase } from 'src/app/shared/interfaces/phone-case';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { CartItem } from 'src/app/shared/interfaces/cart-item';
import { CartService } from 'src/app/shared/cart.service';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [MessageService]
})
export class ProductsComponent implements OnInit, OnChanges {

  phoneType: string;
  products: PhoneCase[];
  cart: CartItem[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(private router: ActivatedRoute, private dService: DataService, private cService: CartService, private messageService: MessageService) { }
  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
}
ngOnInit() {
    this.dService.currProducts.subscribe(x =>{
      this.products = x;
      console.log(x)
    });
    // console.log(this.router.snapshot.paramMap)
    this.phoneType = this.router.snapshot.paramMap.get('id');
    this.dService.updateProPage(this.phoneType);
    //this.products = this.filterProducts(this.phoneType);
  }

  // filterProducts(x: string): PhoneCase[] {
  //   return this.products.filter(products => products.phone === this.phoneType);
  // }
  addToCart(item) {
    this.cService.addItemsToCart(item);
    this.showSuccess();
    console.log('this is ', item);
  }
  // addToCart(product: PhoneCase){
  //   //Add to cart button - first push into an empty array above then apply setCartItem from cService
  //   this.cart.push(product);
  //   this.cService.setCartItems(this.cart);
  //   this.showSuccess();
  //   console.log("this is the add to cart click", product);
  //   console.log("this is the cart[]", this.cart);
  // }

  ngOnChanges() {
    console.log('products changed');
  }
}
