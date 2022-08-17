import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmailSettingsComponent } from './new-email-settings.component';

describe('NewEmailSettingsComponent', () => {
  let component: NewEmailSettingsComponent;
  let fixture: ComponentFixture<NewEmailSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmailSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
