import { Component, OnInit, Output, EventEmitter } from '@angular/core';


import { CustomerService } from '../../../service/customer.service';
import { Router } from '@angular/router';
import { Customer} from '../model/customerList';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  providers: [CustomerService],

})
export class SearchFormComponent implements OnInit {
  
  url : string;

  name: string;
  surname1: string;
  surname2: string;
  idCardNumber: string;

  customers :  Customer[];
  pageOfItems: Array<any>;

  constructor(
    private _router : Router,
    private _customerService : CustomerService ) {
  }

  ngOnInit() {}

  search() {
    this.url = "?search=" + this.buildRsql()
    this._customerService.getByRsql(this.url).subscribe((data : any) => {
      if(data.page.totalElements > 0) {
        this.customers = data._embedded.persons;
        console.log(this.customers);
      } else {
        this.customers = []
      }     
    });
  }

  buildRsql(){
    var rsql = "";
    rsql = this.appendRsql(rsql, "name", this.name)
    rsql = this.appendRsql(rsql, "surname1", this.surname1)
    rsql = this.appendRsql(rsql, "surname2", this.surname2)
    rsql = this.appendRsql(rsql, "idCard.number", this.idCardNumber)
    return rsql;
  }

  appendRsql(rsql, key, value) {
    if(value != null && value.length > 0) {
      if(rsql.length > 0) {
        rsql += ";"
      }
      rsql += key + "=re=" + value;
    }
    return rsql
  }

}