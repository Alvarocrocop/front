import { Component, OnInit } from '@angular/core';

import { TokenOperations } from 'src/app/service/token.operations';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [TokenOperations]
})
export class LoginComponent implements OnInit {

  public tokenRequest: any;
  public bearerToken: any;
  public errorRequest : any;

  constructor(
    private _router: Router,
    private _tokenOperations : TokenOperations
  ) {
      this.tokenRequest = {
      "username": "",
      "password": ""
      };
      this.bearerToken = {
      "token_type" : "",
      "access_token" : ""
      };
    }
  invalidLogin(){
    var invalid = "Login inválido";
  }
  

  ngOnInit() {
  }
  onSubmit(username, password){
      
   this._tokenOperations.getToken(username,password).subscribe(
    response =>{
      this.bearerToken = response;
      console.log(this.bearerToken.access_token);
      localStorage.setItem('userToken', this.bearerToken.access_token);
      this._router.navigate(["/home"]);
      console.log(localStorage.getItem('userToken'));
    },
    error =>{
      console.log(<any>error);
      this._router.navigate(["/login"]);
      this.invalidLogin();
    }
  ); 
  }
  
}
