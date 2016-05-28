import { Component, OnInit } from '@angular/core';
import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { Patient } from './patient';
import { PatientService } from './patient.service';

/**
 * Component that shows the details of a single patient.
 */
@Component({
	selector: 'patient-details',
	templateUrl: 'app/patient-details.component.html',
	directives: [ROUTER_DIRECTIVES]
})

export class PatientDetailsComponent implements OnInit {
	patient: Patient;
	
	constructor(
	  private patientService: PatientService,
	  private routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this.routeParams.get('id');
		// this.patientService.getPatient(id)
		//   .then(patient => this.patient = patient);
		this.patient = this.patientService.getPatient(id);
	}

	goBack() {
	  window.history.back();
	}
}