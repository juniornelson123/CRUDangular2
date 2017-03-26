import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class ParkingService {
	//url da api
	private url: string = "http://localhost:3000"

  	constructor(private http: Http) { }

  	//Pega os estacionamentos da api
  	getParkings(){
  		return this.http.get(this.url+"/parkings")
  			.map(res => res.json());
  	}

  	getParking(id){
  		return this.http.get(this.url+"/parking/"+id)
  			.map(res => res.json());
  	}

  	addParking(parking){
  		return this.http.post(this.url+"/parkings", parking)
  			.map(res => res.json())
  	}

  	updateParking(parking){
  		return this.http.put(this.url+"/parking/"+parking._id, parking)
  			.map(res => res.json())
  	}

  	deleteParking(id){
  		return this.http.delete(this.url+"/parking/"+id)
  			.map(res => res.json())
  	}


}
