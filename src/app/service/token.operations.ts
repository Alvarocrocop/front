import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TokenOperations{
    public params : any;
    public authorization :any;
    public url: string;
    token;

    constructor(
        private _http : HttpClient,
    ){
        this.url = "http://localhost:8081/token"
    }

    getToken(username,password){
        var body;
        var authorization = btoa(username + ':' + password);
        console.log(authorization);
        const httpOptions ={
            headers : new HttpHeaders()
        }
        httpOptions.headers = httpOptions.headers.set('Authorization', 'Basic ' + authorization);

        return  this._http.post(this.url,body, httpOptions);
    }

}