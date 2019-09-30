import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { CustomerService } from '../../../service/customer.service';
import { Customer} from '../model/customerList';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  id: string;
  customer: Customer;

  constructor(
    private _router : ActivatedRoute,
    private _customerService : CustomerService ) {
  }

  ngOnInit() {
    this._router.params.subscribe(params => {
      this.id = params['id']
      this._customerService.getById(this.id).subscribe((data : any) => {
        this.customer = data;
      });
    })
  }

}
