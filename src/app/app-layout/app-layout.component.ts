import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss'],

})
export class AppLayoutComponent implements OnInit {
    sidebar_routing_header:string;
    constructor() {  
    }

    ngOnInit() {
    }
    
    sidebarRoutingChange(header_obj):void{
        this.sidebar_routing_header = header_obj.selected_url_header;
    }
}
