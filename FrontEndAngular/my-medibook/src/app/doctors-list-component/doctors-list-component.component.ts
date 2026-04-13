import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../doctors-service.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctors-list-component',
  templateUrl: './doctors-list-component.component.html',
  styleUrls: ['./doctors-list-component.component.css']
})
export class DoctorsListComponentComponent implements OnInit {

  // Store list of doctors
  doctors: Doctor[] = [];

  // Inject DoctorsService
  constructor(private doctorsService: DoctorsService) {}

  // Initialize component and load doctors
  ngOnInit(): void {
    this.doctors = this.doctorsService.getAllDoctors();
  }

  // Handle selected doctor from child component
  onDoctorSelected(doctor: Doctor) {
    console.log("Selected Doctor:", doctor);
  }
}