import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CustomerService{

    public url: string;
    public results : Array<Object>;
    
    constructor(
        private _http: HttpClient,
    ){
        this.url = "http://localhost:8084"
    }

    getById(id):Observable<any>{
        var token = localStorage.getItem('userToken');
        console.log(token);
        const httpOptions = {
            'Authorization' : "Bearer " + token,
            'accept' :'application/hal+json'
        }
        return this._http.get(this.url + "/customers/" +id,{headers: httpOptions});
    }
    
    getByRsql(param1,param2):Observable<any>{
        var token = localStorage.getItem('userToken');
        const httpOptions = {
            'Authorization' : "Bearer " + token,
            'accept' :'application/hal+json'
        }
      return this._http.get(this.url + "/customers?" + param1 + "==" + param2, {headers : httpOptions});
    }
}