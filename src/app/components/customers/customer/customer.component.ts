import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})



export class CustomerComponent implements OnInit {  

  constructor( 
    private _router : Router
  ){ 
   
  }
  ngOnInit() {
    if (localStorage.getItem('userToken') === null ){
      this._router.navigate(["/login"]);
    }
  }
}
