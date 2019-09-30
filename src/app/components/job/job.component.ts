import { Component, OnInit } from '@angular/core';

import { JobService } from 'src/app/service/job.service';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  providers: [JobService]
})
export class JobComponent implements OnInit {

  public jobResponse : any;
  public jobId: any

  constructor(
    private _jobService : JobService
  ) { }

  ngOnInit() {
  }

  getById(jobId){
    this._jobService.getById(this.jobId).subscribe(
      response => {
        this.jobResponse = response;
      },
      error => {
        console.log(<any>error);
    });
  }
}
