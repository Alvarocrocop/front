import { Component, OnInit } from '@angular/core';
import { policy } from '../model/policy';
import { ActivatedRoute } from '@angular/router';
import { PoliciesService } from 'src/app/service/policies.service';

@Component({
  selector: 'app-policies-view-detail',
  templateUrl: './policies-view-detail.component.html',
  styleUrls: ['./policies-view-detail.component.scss']
})
export class PoliciesViewDetailComponent implements OnInit {

  id: string;
  policy : policy;

  constructor(
    private _router : ActivatedRoute,
    private _policyService : PoliciesService
  ) { }

  ngOnInit() {
    this.policy = null;
    this._router.params.subscribe(params => {
      this.id = params['id']
      this._policyService.getById(this.id).subscribe((data:any) => {
      this.policy = data;
      console.log(this.policy);
      });
    })
  }

}
