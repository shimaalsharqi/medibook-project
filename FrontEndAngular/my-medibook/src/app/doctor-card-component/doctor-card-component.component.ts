import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctor-card-component',
  templateUrl: './doctor-card-component.component.html',
  styleUrls: ['./doctor-card-component.component.css']
})
export class DoctorCardComponentComponent {

  // Receive doctor data from parent
  @Input() doctor!: Doctor;

  // Emit selected doctor to parent
  @Output() selectDoctor = new EventEmitter<Doctor>();

  // Trigger when booking button is clicked
  bookDoctor() {
    this.selectDoctor.emit(this.doctor);
  }
}