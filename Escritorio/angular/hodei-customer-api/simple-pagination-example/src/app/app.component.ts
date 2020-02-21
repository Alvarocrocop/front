import { Component } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-pagination-example';
  collection = [];

  constructor(){
    for(let i=1; i<=100; i++){
      let Obj = {'name' : `Employee Name ${i}`,'code' : `EMP00${1}`}
      this.collection.push(Obj);
    }
  }
}
