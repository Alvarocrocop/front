import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EconomicService{
    
    public url: string;

    constructor(
        private _http : HttpClient
    ){
        this.url= "http://localhost:8084";
    }

    getById(id):Observable<any>{
        var body;
        var token = localStorage.getItem('userToken');
        console.log(token);
        const httpOptions = {
            'Authorization' : "Bearer " + token,
            'accept' :'application/hal+json'
        }
        return this._http.get(this.url+ "/economic-activities/" + id,{headers: httpOptions});
    }
}