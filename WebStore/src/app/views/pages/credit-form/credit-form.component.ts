import { Component, OnInit } from '@angular/core';
import { OrderRequest } from 'src/app/shared/interfaces/order';
import { ApiServiceService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.scss']
})
export class CreditFormComponent implements OnInit {
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
    this.service.initSession(this.orderRequest)
      .subscribe(
        (resp: any)=> this.redirect(resp.id),
      );
  }
  redirect(id: number) {
    stripe.redirectToCheckout({
      sessionId: id
    }).then(function(result: { error: { message: any; }; })
    {
      window.alert(result.error.message);
    });
  }
}
