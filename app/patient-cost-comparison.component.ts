import { Component, OnInit } from '@angular/core';
import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { Patient } from './patient';
import { PatientService } from './patient.service';

/**
 * Component that shows the details of a single patient.
 */
@Component({
	selector: 'patient-cost-comparison',
	templateUrl: 'app/patient-cost-comparison.component.html',
	directives: [ROUTER_DIRECTIVES]
})

export class PatientCostComparisonComponent implements OnInit {
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