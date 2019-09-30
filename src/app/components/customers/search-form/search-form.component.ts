import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CustomerService } from '../../../service/customer.service';
import { CustomerRequest } from '../model/customerRequest';
import { Router } from '@angular/router';
import { Customer} from '../model/customerList';
import { convertCompilerOptionsFromJson } from 'typescript';
@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  providers: [CustomerService],

})
export class SearchFormComponent implements OnInit {
  
  _customerRequest: CustomerRequest;
  customers :  Customer[];
  url : string;
  links: any;
  link : any[any];

  constructor(
    private _router : Router,
    private _customerService : CustomerService ) {
    this._customerRequest = {
      "key" : "",
      "value" : ""
    }
  }

  ngOnInit() {}

  getByRsql(form){
    this.url = "?search=" + this._customerRequest.key + "==" +this._customerRequest.value;
    this._customerService.getByRsql(this.url).subscribe((data : any) => {
      this.customers = data._embedded.persons;
      console.log("customers:")
      console.log(this.customers)     
    });
  }
}
