import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesViewDetailComponent } from './policies-view-detail.component';

describe('PoliciesViewDetailComponent', () => {
  let component: PoliciesViewDetailComponent;
  let fixture: ComponentFixture<PoliciesViewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesViewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
