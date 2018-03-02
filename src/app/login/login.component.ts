import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

    constructor( private router : Router) {
        sessionStorage.clear();  
    }

    ngOnInit() {
    }
    goDashboard(){
        var username = (<HTMLInputElement>document.getElementById("userName")).value.trim();
        var password = (<HTMLInputElement>document.getElementById("userPassword")).value.trim();
        if(username==password && username!=''){
            this.router.navigate(['processedlogin']);
            sessionStorage.setItem('isLoggedin','true');
            sessionStorage.setItem('userName',username);
        }
        else{
            (<HTMLInputElement>document.getElementById("userName")).value = '';
            (<HTMLInputElement>document.getElementById("userPassword")).value = '';
        }
    }
}
