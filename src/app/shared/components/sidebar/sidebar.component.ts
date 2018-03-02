import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],

})
export class SidebarComponent implements OnInit {
    @Output('URLHeaderChanged') title_header = new EventEmitter<{selected_url_header:string}>();
    constructor(public router: Router) {  
    }
    ngOnInit() {
        this.title_header.emit({selected_url_header : this.mapURLToHeader(this.router.url)});
    }
    navigateToURL(urlname:string,url_header:string){
        this.router.navigate([urlname]);
        this.title_header.emit({selected_url_header : url_header});
    }
    getRoutingSpecificClasses(url:string):string{
        return (this.router.url==url)?'disabled_sidebar_item':'';
    }
    mapURLToHeader(url:string):string{
        let header_obj={
            '/processedlogin/dashboard':'Home',
            '/processedlogin/faq':'FAQ',
            '/processedlogin/retailer':'Retailer',
            '/processedlogin/product-catagory':'Product Catagory',
            '/processedlogin/region':'Region'
        };
        return header_obj[url];
    }
}
