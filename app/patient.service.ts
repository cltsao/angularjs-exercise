import { Injectable } from '@angular/core';

import { Patient } from './patient';
import { PATIENTS } from './mock-patients';

@Injectable()
export class PatientService {
	getPatients() {
		return Promise.resolve(PATIENTS);
	}

	getPatient(id: number) {
	  return Promise.resolve(PATIENTS).then(
	    patients => patients.filter(patient => patient.id === id)[0]
	  );
	}
}