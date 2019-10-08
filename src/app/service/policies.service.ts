import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { policy } from 'src/app/components/policies-Api/model/policy';
@Injectable({
    providedIn: 'root'
})
export class PoliciesService{
    
    public baseUrl : string;
    public url : string;
    public results : any;

    constructor(
        private _http : HttpClient,
    ){
        this.baseUrl = "http://localhost:8190/policies"
    }

    getById(id):Observable<any>{
        this.url = this.baseUrl + "/" + id;
        var token = localStorage.getItem('userToken');
        console.log(token);
        const httpOptions = {
            'Authorization' : "Bearer " + token,
            'accept' :'application/hal+json'
        }
        return this._http.get(this.url ,{headers: httpOptions});
    }

    getByRsql(params:string):Observable<policy>{
        var token = localStorage.getItem('userToken');
        this.url = this.baseUrl + "/" + params;
        console.log(this.url);
        const httpOptions = {
            'Authorization' : "Bearer " + token,
            'accept' :'application/hal+json',
            'Access-Control-Allow-Origin' : "*, *"
        }
        console.log(httpOptions);
        return this._http.get<policy>(this.url, {headers: httpOptions}).pipe(
            map((result:any)=>{
                this.results = result;
                console.log(this.results);
                return this.results as policy;
            }));
    }
}