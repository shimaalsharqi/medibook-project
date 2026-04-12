import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';

import { DoctorCardComponentComponent } from './doctor-card-component/doctor-card-component.component';
import { AppointmentFormComponentComponent } from './appointment-form-component/appointment-form-component.component';
import { DoctorsListComponentComponent } from './doctors-list-component/doctors-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,

    DoctorCardComponentComponent,
    AppointmentFormComponentComponent,
    DoctorsListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
