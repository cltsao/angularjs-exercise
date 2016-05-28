import { Injectable } from '@angular/core';

import { Patient } from './patient';
import { PATIENTS } from './mock-patients';

/**
 * Service for getting one or multiple patients. For simplicity, it reads patients from mock data.
 */
@Injectable()
export class PatientService {
	getPatients() {
		//return Promise.resolve(PATIENTS);
		return PATIENTS;
	}

	getPatient(id: number) {
		//return Promise.resolve(PATIENTS).then(
		//  patients => patients.filter(patient => patient.id === id)[0]
		//);
		return PATIENTS.filter(patient => patient.id === id)[0];
	}

	getAverageCost(country: string) {
		var costs = PATIENTS.filter(patient => patient.country === country && typeof patient.procedure === 'object').map(patient => patient.procedure.cost);
		var sum = 0;
		costs.forEach(function(cost) { sum += +cost; });
		var average = sum / costs.length;
		console.log("Statistics of patients by country " + country + ": count = " + costs.length + ", average = " + average);
		return average;
	}
}