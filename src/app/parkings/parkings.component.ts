import { Component, OnInit } from '@angular/core';
import { ParkingService } from './shared/parking.service';
import { Parking } from './shared/parking';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit {
	
	private parkings: Parking[]=[];
	
	constructor(private parkingService: ParkingService) { }

	//Pega a lista de estacionamentos assim que o componente iniciar
	ngOnInit() {
		let user = JSON.parse(localStorage.getItem('currentUser'))
		this.parkingService.getParkings(user.token)
			.subscribe(data => this.parkings = data);

		console.log(user.token)	
	}

	deleteQuestion(parking: Parking){
		this.parkingService.deleteParking(parking._id).subscribe( data => console.log(data))
	}
}
