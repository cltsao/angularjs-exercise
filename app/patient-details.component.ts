import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
	selector: 'patient-details',
	templateUrl: 'app/patient-details.component.html',
})

export class PatientDetailsComponent implements OnInit {
	patient: Patient;
	
	constructor(
	  private patientService: PatientService,
	  private routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this.routeParams.get('id');
		this.patientService.getPatient(id)
		  .then(patient => this.patient = patient);
	}

	goBack() {
	  window.history.back();
	}
}