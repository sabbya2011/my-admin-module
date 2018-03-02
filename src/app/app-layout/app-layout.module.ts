import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './app-layout.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import {DropdownModule} from "ng2-dropdown";
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        AppLayoutRoutingModule,
        DropdownModule
        // HttpModule,
    ],
    providers: [ ],
    declarations: [
        AppLayoutComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class AppLayoutModule {
}
