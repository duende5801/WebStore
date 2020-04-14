import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  purchaseOrderResponse = {};
  constructor(_service: ApiServiceService, activatedRoute: ActivatedRoute) {
    const s = activatedRoute.snapshot.queryParams['session_id'];
    this.purchaseOrderResponse = s;
  }

  ngOnInit() {
  }

}
