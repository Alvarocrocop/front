import { Component, OnInit } from '@angular/core';

import { LegalService } from 'src/app/service/legal.service';
@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
  providers: [LegalService]
})
export class LegalComponent implements OnInit {

  public legalResponse: any;
  public legalId: any;
  
  constructor(
    private _legalService : LegalService
  ) { }

  ngOnInit() {
  }

  getById(id){
    this._legalService.getById(id).subscribe(
      response => {
        this.legalResponse = response;
      },
      error => {
        console.log(<any>error);
    });
  }
}
