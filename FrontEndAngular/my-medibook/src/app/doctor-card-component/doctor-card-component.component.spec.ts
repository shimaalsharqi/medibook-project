import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCardComponentComponent } from './doctor-card-component.component';

describe('DoctorCardComponentComponent', () => {
  let component: DoctorCardComponentComponent;
  let fixture: ComponentFixture<DoctorCardComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorCardComponentComponent]
    });
    fixture = TestBed.createComponent(DoctorCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
