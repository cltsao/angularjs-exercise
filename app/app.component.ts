import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PatientService } from './patient.service';
import { PatientsComponent } from './patients.component';
import { PatientDetailsComponent } from './patient-details.component';

@Component({
  selector: 'health-portal',
  template: `
  <h1>{{title}}</h1>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
  ROUTER_PROVIDERS,
  PatientService
  ]
})

@RouteConfig([
{
  path: '/patients',
  name: 'Patients',
  component: PatientsComponent,
  useAsDefault: true
},
{
  path: '/patient/:id',
  name: 'Patient',
  component: PatientDetailsComponent
}
])

export class AppComponent {
  title = 'Health Portal';
}