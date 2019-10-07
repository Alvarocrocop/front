import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesSearchFormComponent } from './policies-search-form.component';

describe('PoliciesSearchFormComponent', () => {
  let component: PoliciesSearchFormComponent;
  let fixture: ComponentFixture<PoliciesSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
