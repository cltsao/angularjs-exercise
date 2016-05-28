import { Component, OnInit } from '@angular/core';
import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { Patient } from './patient';
import { PatientService } from './patient.service';

declare var jQuery:any;

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
 	keys: Array<string>;
 	categories: Array<string>;
 	values: Array<number>;

 	constructor(
 		private patientService: PatientService,
 		private routeParams: RouteParams) {
 	}

 	ngOnInit() {
 		let id = +this.routeParams.get('id');
 		this.patient = this.patientService.getPatient(id);
 		this.categories = [ 'My cost' ];
 		this.values = [ +this.patient.procedure.cost ];
 		this.keys = ['gender', 'city', 'country', 'company', 'job', 'race'];
 		this.keys.forEach(key => {
 			this.categories.push(this.patient[key] + ' (' + key + ')');
 			this.values.push(this.patientService.getAverageCost(key, this.patient[key]));
 		});
 	}

 	ngAfterViewInit() {
 		this.renderChart();
 	}

 	renderChart(){
 		jQuery('#container').highcharts({
 			chart: {
 				type: 'bar'
 			},
 			title: {
 				text: 'Average Procedure Cost'
 			},
 			xAxis: {
 				categories: this.categories
 			},
 			yAxis: {
 				min: 0,
 				title: {
 					text: 'Average procedure cost (US dollar)',
 					align: 'high'
 				},
 				labels: {
 					overflow: 'justify'
 				}
 			},
 			tooltip: {
		        pointFormat: "Value: ${point.y:.2f}"
		    },
 			credits: {
 				enabled: false
 			},
 			series: [{
 				name: 'Cost',
 				showInLegend: false,
 				data: this.values
 			}]
 		});
	}

	goBack() {
		window.history.back();
	}
}