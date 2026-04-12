import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsListComponentComponent } from './doctors-list-component.component';

describe('DoctorsListComponentComponent', () => {
  let component: DoctorsListComponentComponent;
  let fixture: ComponentFixture<DoctorsListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsListComponentComponent]
    });
    fixture = TestBed.createComponent(DoctorsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
