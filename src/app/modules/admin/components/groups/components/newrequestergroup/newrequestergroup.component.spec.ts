import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrequestergroupComponent } from './newrequestergroup.component';

describe('NewrequestergroupComponent', () => {
  let component: NewrequestergroupComponent;
  let fixture: ComponentFixture<NewrequestergroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewrequestergroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrequestergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
