import { Component, OnInit } from '@angular/core';

import { EconomicService } from 'src/app/service/economic.service';
@Component({
  selector: 'app-economic',
  templateUrl: './economic.component.html',
  styleUrls: ['./economic.component.scss'],
  providers: [EconomicService]
})
export class EconomicComponent implements OnInit {

  public economicResponse : any;
  public economicId: any;

  constructor(
    private _economicService : EconomicService
  ) { }

  ngOnInit() {
  }

  getById(economicId){
    this._economicService.getById(this.economicId).subscribe(
      response => {
        this.economicResponse = response;
      },
      error => {
        console.log(<any>error);
    });
  }
}
