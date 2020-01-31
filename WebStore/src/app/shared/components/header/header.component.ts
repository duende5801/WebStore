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
  display = false;

  selectedPhone: Phone;

  constructor() {
  }
  ngOnInit() {
    this.products = [
      {name: 'iPhone'}, {name: 'Samsung'}, {name: 'Google'}
    ];
  }
  formDisplay() {
    this.display = !this.display;
  }


}
