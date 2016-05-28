import { Component, OnInit } from '@angular/core';
import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { Patient, CostComparison } from './patient';
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
	costComparison: CostComparison;
	
	constructor(
	  private patientService: PatientService,
	  private routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this.routeParams.get('id');
		this.patient = this.patientService.getPatient(id);
		this.costComparison = {};
		this.costComparison['country'] = this.patientService.getAverageCost(this.patient.country);
	}

	goBack() {
	  window.history.back();
	}
}