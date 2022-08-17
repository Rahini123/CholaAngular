import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaPolicyComponent } from './sla-policy.component';

describe('SlaPolicyComponent', () => {
  let component: SlaPolicyComponent;
  let fixture: ComponentFixture<SlaPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
