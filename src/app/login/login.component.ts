	
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../_service/login.service';
 
 
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    user: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService){}


    ngOnInit() {
    }
 
    login() {
       	this.loginService.login(this.model).subscribe(user => {
       		this.user = user
       		localStorage.setItem("currentUser", JSON.stringify(user))

        	this.router.navigate(['/parkings'])
    		console.log(user)
       	}, error => {
    		console.log(error)

       	})

    }
}