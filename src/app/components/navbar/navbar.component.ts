import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('userToken');
    this._router.navigate(["/login"]);
    console.log(localStorage.getItem('userToken'));
  }
}
