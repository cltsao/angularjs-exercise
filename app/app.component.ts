import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PatientService } from './patient.service';
import { PatientsComponent } from './patients.component';
import { PatientDetailsComponent } from './patient-details.component';
import { PatientCostComparisonComponent } from './patient-cost-comparison.component';

/**
 * App component for navigation.
 */
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
},
{
  path: '/patient-cost-comparison/:id',
  name: 'PatientCostComparison',
  component: PatientCostComparisonComponent
}
])

export class AppComponent {
  title = 'Health Portal';
}