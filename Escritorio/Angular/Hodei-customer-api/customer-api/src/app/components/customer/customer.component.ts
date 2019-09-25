import { Component, OnInit } from '@angular/core';

import {CustomerService} from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [CustomerService]
})

export class CustomerSearchForm {
  name: string;
  idCard: string;
  birthDate: string;

  getRsql() {
    string rsql = "";
    if(name is defined) {
      rsql += "name=re=" + this.name;
    }
    return rsql;
  }
}

export class CustomerComponent implements OnInit {

  public customerForm : CustomerForm;
  public customerResponse : any;
  public userId : any;
  public param1: any;
  public param2: any;
  public persons : Array<Object>;
  public links : any;
  public page : any;
  constructor(
    private _CustomerService : CustomerService
  ){ 
  }

  ngOnInit() {
  }

  getById(userId){
    console.log(this.userId);
    this._CustomerService.getById(this.userId).subscribe(
      response =>{
        this.customerResponse = response;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
  getByRsql(param1,param2){
    console.log(this.param1, this.param2);
    this._CustomerService.getByRsql(this.param1,this.param2).subscribe(
      response =>{
        console.log(response)
        for (let index = 0; index < response._embedded.persons.length; index++) {
          const element = response._embedded.persons[index]; 
          console.log(element);
          
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
