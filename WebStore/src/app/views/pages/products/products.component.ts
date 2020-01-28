import { Component, OnInit } from '@angular/core';
import { PhoneCase } from 'src/app/shared/interfaces/phone-case';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { CartItem } from 'src/app/shared/interfaces/cart-item';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  val: number;
  phoneType: string;
  products: PhoneCase[];
  cart: PhoneCase[] =[];
  constructor(private router: ActivatedRoute, private dService: DataService, private cService: DataService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
    this.phoneType = this.router.snapshot.paramMap.get('id');
    this.products = this.filterProducts(this.phoneType);
  }

  filterProducts(x: string): PhoneCase[] {
    return this.products.filter(products => products.phone === this.phoneType);
  }
  addToCart(product: PhoneCase){
    // cart = this.products.push(product);
    this.cart = {
      id: product.id,
      img: product.img,
      name: product.name,
      phone: product.phone,
      description: product.description,
      price: product.price,
      rating: product.rating,
      quantity: product.quantity
    };
    console.log("this is the add to cart click", product);
  }

}
