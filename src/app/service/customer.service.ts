import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { customer } from '../components/customers/model/customerList';
import { EventEmitter } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class CustomerService{

    $sendCustomers = new EventEmitter();

    public baseUrl: string;
    public _customerRequest: any;
    public url: string;
    public results : any;

    constructor(
        private _http: HttpClient,
    ){
        this.baseUrl = "http://localhost:8084/customers";
    }

    getById(customerRequest):Observable<any>{
        this._customerRequest = customerRequest;
        this.url = this.baseUrl+ "/" + customerRequest.id;
        var token = localStorage.getItem('userToken');
        console.log(token);
        const httpOptions = {
            'Authorization' : "Bearer " + token,
            'accept' :'application/hal+json'
        }
        return this._http.get(this.url ,{headers: httpOptions});
    }
    
    getByRsql(params:string):Observable<customer>{
        var token = localStorage.getItem('userToken');
        this.url = this.baseUrl+ "/" + params;
        console.log(this.url);
        const httpOptions = {
            'Authorization' : "Bearer " + token,
            'accept' :'application/hal+json'
        }
        return this._http.get<customer>(this.url, {headers : httpOptions}).pipe(
            map((result:any)=>{
                this.results = result;
               //result={"_embedded": {"categories": [..]..}
               console.log(this.results);
               return this.results as customer; //just return "categories"
            }));
    }
}
