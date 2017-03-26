import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../shared/parking.service'
import { Parking } from '../shared/parking';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parking-form',
  templateUrl: './parking-form.component.html',
  styleUrls: ['./parking-form.component.css']
})
export class ParkingFormComponent implements OnInit {

	title: string;
	parking: Parking = new Parking();

	constructor(
		private parkingService: ParkingService,
		private router: Router,
		private route: ActivatedRoute
		) { }


	ngOnInit() {
		var id = this.route.params.subscribe(params => {
			var id = params['id'];
			this.title = id ? "Editar Estacionamento" : "Criar Estacionamento"

			if(!id) 
				return
			
				this.parkingService.getParking(id)
					.subscribe(
						parking => this.parking = parking,
						response => {});
		});
	}

	save(){
		var result;

		if(this.parking._id) {
			result = this.parkingService.updateParking(this.parking)
				.subscribe(data => this.router.navigate(['/']));
		} else {
			result = this.parkingService.addParking(this.parking)
				.subscribe(data => this.router.navigate(['/']));
		}

	}

}
