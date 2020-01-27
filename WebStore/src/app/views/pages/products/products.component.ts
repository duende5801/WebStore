import { Component, OnInit } from '@angular/core';
import { PhoneCase } from 'src/app/shared/interfaces/phone-case';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  val: number = 3;
  phoneType: string;
  products: PhoneCase[];
  constructor(private router: ActivatedRoute, private dService: DataService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
    this.phoneType = this.router.snapshot.paramMap.get('id');
    console.log(this.phoneType)
  }

}
