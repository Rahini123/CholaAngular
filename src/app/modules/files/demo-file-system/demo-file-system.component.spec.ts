import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFileSystemComponent } from './demo-file-system.component';

describe('DemoFileSystemComponent', () => {
  let component: DemoFileSystemComponent;
  let fixture: ComponentFixture<DemoFileSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFileSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFileSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
