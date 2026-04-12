import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctor-card-component',
  templateUrl: './doctor-card-component.component.html',
  styleUrls: ['./doctor-card-component.component.css']
})
export class DoctorCardComponentComponent {

 
  @Input() doctor!: Doctor;

 
@Output() selectDoctor = new EventEmitter<Doctor>();

bookDoctor() {
  this.selectDoctor.emit(this.doctor);
}
}