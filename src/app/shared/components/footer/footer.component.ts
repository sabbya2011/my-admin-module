import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],

})
export class FooterComponent implements OnInit {

    constructor(public router: Router) {  
    }
    ngOnInit() {
    }

}
