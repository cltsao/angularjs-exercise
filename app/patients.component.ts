import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Patient } from './patient';
import { PatientService } from './patient.service';

declare var jQuery:any;

/**
 * Component that lists patients for selecting a patient to view details.
 */
@Component({
  selector: 'patients',
  template:`
    <h2>Patient Selection</h2>
    <h3>Enter patient name</h3>
    <input id="patient-name">
    <h3>Or pick one of the first 20 patients</h3>
    <ul class="patients">
      <li *ngFor="let patient of patients" (click)="gotoPatient(patient.id)">
        <span class="badge">{{patient.id}}</span> {{patient.first_name}}  {{patient.last_name}}
      </li>
    </ul>
  `,
})

export class PatientsComponent implements OnInit {
  patients: Patient[];

  constructor(
    private router: Router,
    private patientService: PatientService) {
  }

  ngOnInit() {
    this.patients = this.patientService.getPatients();
    var tags = [];
    this.patients.forEach(function(patient){
      tags.push({
        value: patient.id,
        label: patient.first_name + ' ' + patient.last_name
      });
    });
    var _this = this;
    $("#patient-name").autocomplete({
      source: tags,
      select: function( event, ui ) {
        _this.gotoPatient(ui.item.value);
      }
    });
    this.patients = this.patients.slice(0, 20);
  }

  gotoPatient(id: number) {
    let link = ['Patient', {id: id}];
    this.router.navigate(link);
  }
}