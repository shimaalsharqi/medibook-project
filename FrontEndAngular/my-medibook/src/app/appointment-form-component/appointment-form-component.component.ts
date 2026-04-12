import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-form-component',
  templateUrl: './appointment-form-component.component.html',
  styleUrls: ['./appointment-form-component.component.css']
})
export class AppointmentFormComponentComponent {
  patientName: string = '';
  isFormValid: boolean = false;

  onNameInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.patientName = value;
    this.validateForm();
  }

  validateForm() {
    this.isFormValid =
      this.patientName.trim() !== ''
     
  }

  
  onInputChange() {
    this.validateForm();
  }
}