import { Component, OnInit } from '@angular/core';

import { ProfessionsService } from 'src/app/service/professions.service';
@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.scss'],
  providers: [ProfessionsService]
})
export class ProfessionsComponent implements OnInit {

  public professionsResponse: any;
  public professionsId:any;

  constructor(
    private _professionsService : ProfessionsService
  ) { }

  ngOnInit() {
  }

  getById(id){
    this._professionsService.getById(id).subscribe(
      response => {
        this.professionsResponse = response;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
