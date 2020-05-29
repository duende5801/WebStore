import { Component, OnInit } from '@angular/core';
import { OrderRequest } from 'src/app/shared/interfaces/order';
import { ApiServiceService } from 'src/app/shared/api-service.service';


@Component({
  selector: 'app-complete-purchase',
  templateUrl: './complete-purchase.component.html',
  styleUrls: ['./complete-purchase.component.scss']
})
export class CompletePurchaseComponent implements OnInit {
  public sessionId: string;
  public orderRequest: OrderRequest[] = [];

  constructor(private service: ApiServiceService) { }

  ngOnInit() {

  }
}
