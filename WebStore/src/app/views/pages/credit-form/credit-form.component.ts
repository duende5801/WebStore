import { Component, OnInit } from '@angular/core';
import {loadStripe} from '@stripe/stripe-js';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.scss']
})
export class CreditFormComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

}
