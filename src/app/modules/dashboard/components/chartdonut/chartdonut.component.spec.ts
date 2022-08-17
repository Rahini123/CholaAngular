import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartdonutComponent } from './chartdonut.component';

describe('ChartdonutComponent', () => {
  let component: ChartdonutComponent;
  let fixture: ComponentFixture<ChartdonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartdonutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartdonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
