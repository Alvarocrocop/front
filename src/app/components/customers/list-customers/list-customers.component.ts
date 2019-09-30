import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

import { customer} from '../model/customerList';
import { CustomerService } from 'src/app/service/customer.service';
@Component({
  selector: 'list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {

  items = [];
  pageOfItems: Array<any>;
  customers : any;
  
  

  constructor(
    private _customerService : CustomerService,
    private _router : Router
  ) { }
  ngOnInit() {
   this.customers =  this._customerService.getByRsql;
   console.log(this.customers);
   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }

  onChangePage(pageOfItems: Array<any>) {
     //update current page of items
    this.pageOfItems = pageOfItems;
  }

}
