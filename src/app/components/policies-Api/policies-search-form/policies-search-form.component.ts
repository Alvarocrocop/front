import { Component, OnInit } from '@angular/core';

import { PoliciesService } from 'src/app/service/policies.service';
import { policy } from '../model/policy';

@Component({
  selector: 'app-policies-search-form',
  templateUrl: './policies-search-form.component.html',
  styleUrls: ['./policies-search-form.component.scss']
})
export class PoliciesSearchFormComponent implements OnInit {


  url: string;

  networkId: string;
  certificateNumber: string;
  personId: string;
  agreementId: string;
  state: string;

  policies : policy[];

  constructor(
    private _policiesService : PoliciesService 
  ) { }

  ngOnInit() {}

  Search(){
    this.url = "?search=" + this.buildRsql();
    this._policiesService.getByRsql(this.url).subscribe((data : any) => {
      if( data.page.totalElements >0 ) {
        this.policies = data._embedded.policies;
        console.log(this.policies);
      } else {
        this.policies = [];
      }
    });
  }

  buildRsql(){
    var rsql = "";
    rsql = this.appendRsql(rsql, "networkId", this.networkId)
    rsql = this.appendRsql(rsql, "certificateNumber", this.certificateNumber)
    rsql = this.appendRsql(rsql, "personId", this.personId)
    rsql = this.appendRsql(rsql, "agreementId", this.agreementId)
    rsql = this.appendRsql(rsql, "state", this.state)
    
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
