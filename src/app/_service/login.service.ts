import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
	baseUrl = "http://localhost:3000"
  constructor(private http: Http) { }

  login(user){
  	return this.http.post(this.baseUrl+"/signin", user).map((res) => res.json())
  }
}
