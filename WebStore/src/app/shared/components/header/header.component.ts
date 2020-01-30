import { Component, OnInit } from '@angular/core';

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
  }
  
  ngOnInit() {
    this.products = [
      {name: 'iPhone'}, {name: 'Samsung'}, {name: 'Google'}
    ];
  }


}
