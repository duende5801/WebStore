import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

interface Phone {
  name: string;
  code: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  phonesDD: Phone[];

  selectedPhone: Phone;

  constructor() { 
    this.phonesDD = [
      {
        name: 'iPhone8',
        code: 'iPhone',
      },
      {
        name: 'iPhone8 Plus',
        code: 'iPhone',
      },
      {
        name: 'iPhoneX',
        code: 'iPhone',
      },
      {
        name: 'iPhoneXS',
        code: 'iPhone',
      },
      {
        name: 'iPhoneXR',
        code: 'iPhone',
      },
      {
        name: 'iPhone11',
        code: 'iPhone',
      },
      {
        name: 'iPhone11 Pro',
        code: 'iPhone',
      },
      {
        name: 'iPhone11 Pro Max',
        code: 'iPhone',
      },
      {
        name: 'Galaxy 8',
        code: 'Samsung',
      },
      {
        name: 'Galaxy 8s',
        code: 'Samsung',
      },
      {
        name: 'Galaxy Note 8',
        code: 'Samsung',
      },
      {
        name: 'Galaxy 9',
        code: 'Samsung',
      },
      {
        name: 'Galaxy 9s',
        code: 'Samsung',
      },
      {
        name: 'Galaxy Note 9',
        code: 'Samsung',
      },
      {
        name: 'Galaxy 10',
        code: 'Samsung',
      },
      {
        name: 'Galaxy 10s',
        code: 'Samsung',
      },
      {
        name: 'Galaxy Note 10',
        code: 'Samsung',
      },
      {
        name: 'Pixel 3',
        code: 'Google',
      },
      {
        name: 'Pixel 3XL',
        code: 'Google',
      },
      {
        name: 'Pixel 4',
        code: 'Google',
      },
      {
        name: 'Pixel 4XL',
        code: 'Google',
      },

    ]
  }

  ngOnInit() {
  }

}
