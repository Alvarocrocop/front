import { Component, OnInit } from '@angular/core';

import { TokenOperations } from 'src/app/service/token.operations';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TokenOperations]
})
export class HomeComponent implements OnInit {

  constructor(
    private _router: Router
  ){
  }

  ngOnInit(){
    if (localStorage.getItem('userToken') === null ){
      this._router.navigate(["/login"]);
    }
  }

  logout(){
    localStorage.removeItem('userToken');
    this._router.navigate(["/login"]);
    console.log(localStorage.getItem('userToken'));
  }
}