import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'patients',
  template:`
    <h2>Patient Selection</h2>
    <ul class="patients">
      <li *ngFor="let patient of patients">
        <span class="badge">{{patient.id}}</span> {{patient.first_name}}  {{patient.last_name}}
      </li>
    </ul>
  `,
})

export class PatientsComponent implements OnInit {
  patients: Patient[];
  selectedPatient: Patient;

  constructor(
    private router: Router,
    private patientService: PatientService) {
  }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatients().then(patients => this.patients = patients.slice(0,20));
  }
}