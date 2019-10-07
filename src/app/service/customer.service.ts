import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Customer } from '../components/customer-Api/customers/model/customerList';
@Injectable({
    providedIn: 'root'
})
export class CustomerService{


    public baseUrl: string;
    public url: string;
    public results : any;

    constructor(
        private _http: HttpClient,
    ){
        this.baseUrl = "http://localhost:8084/customers";
    }

    getById(id):Observable<any>{
        this.url = this.baseUrl+ "/" + id;
        var token = localStorage.getItem('userToken');
        console.log(token);
        const httpOptions = {
            'Authorization' : "Bearer " + token,
            'accept' :'application/hal+json'
        }
        return this._http.get(this.url ,{headers: httpOptions});
    }
    
    getByRsql(params:string):Observable<Customer>{
        var token = localStorage.getItem('userToken');
        this.url = this.baseUrl+ "/" + params;
        console.log(this.url);
        const httpOptions = {
            'Authorization' : "Bearer " + token,
            'accept' :'application/hal+json'
        }
        return this._http.get<Customer>(this.url, {headers : httpOptions}).pipe(
            map((result:any)=>{
                this.results = result;
               //result={"_embedded": {"categories": [..]..}
               console.log(this.results);
               return this.results as Customer; //just return "categories"
            }));
    }
}
