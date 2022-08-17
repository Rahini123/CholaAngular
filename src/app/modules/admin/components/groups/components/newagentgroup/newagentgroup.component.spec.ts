import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewagentgroupComponent } from './newagentgroup.component';

describe('NewagentgroupComponent', () => {
  let component: NewagentgroupComponent;
  let fixture: ComponentFixture<NewagentgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewagentgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewagentgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
