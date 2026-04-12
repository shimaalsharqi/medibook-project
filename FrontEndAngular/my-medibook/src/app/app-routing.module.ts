import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorsListComponentComponent } from './doctors-list-component/doctors-list-component.component';
import { AppointmentFormComponentComponent } from './appointment-form-component/appointment-form-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'doctors', pathMatch: 'full' },

  { path: 'doctors', component: DoctorsListComponentComponent },

  { path: 'appointment', component: AppointmentFormComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }