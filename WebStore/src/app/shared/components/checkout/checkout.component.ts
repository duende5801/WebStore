import { Component, OnInit } from '@angular/core';
import { OrderRequest } from '../../interfaces/order';
import { ApiServiceService } from '../../api-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public sessionId: string;
  public orderRequest: OrderRequest[] = [];

  constructor(private service: ApiServiceService) { }

  ngOnInit() {
    this.orderRequest.push(
    {
      InventoryItemId: 1,
      Quantity: 3
    },
    {
      InventoryItemId: 2,
      Quantity: 1,
    },
    {
      InventoryItemId: 3,
      Quantity: 2
    });
  }
  submit() {
    this.service.initSession(this.orderRequest).subscribe(resp => console.log(resp));
  }
}
