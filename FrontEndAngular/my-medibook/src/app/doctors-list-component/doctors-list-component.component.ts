import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../doctors-service.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctors-list-component',
  templateUrl: './doctors-list-component.component.html',
  styleUrls: ['./doctors-list-component.component.css']
})
export class DoctorsListComponentComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit(): void {
    this.doctors = this.doctorsService.getAllDoctors();
  }

  onDoctorSelected(doctor: Doctor) {
    console.log("Selected Doctor:", doctor);
  }
}