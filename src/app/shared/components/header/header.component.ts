import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
    @Input('routing_url_header') header_url_text : string;
    public headerUserName : string;
    constructor(public router: Router) {  
    }
    ngOnInit() {
        this.headerUserName = sessionStorage.getItem('userName');
    }
    toggleSidebar() : void{
        document.getElementById('sidebar').classList.toggle('active');//toggle sidebar
        document.getElementById('dashboard_container').classList.toggle('active');//toggle inner container
    }
    logoutUser() : void{
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
    gotoHome() : void{
        this.router.navigate(['processedlogin/dashboard']);
    }
}
