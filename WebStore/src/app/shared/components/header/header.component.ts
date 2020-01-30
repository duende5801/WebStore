import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

interface Phone {
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  products: Phone[];

  selectedPhone: Phone;

  constructor() {
    this.products = [
      {name: 'iPhone'}, {name: 'Samsung'}, {name: 'Google'}
    ];
  }

  ngOnInit() {
  }

}
