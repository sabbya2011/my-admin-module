import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQRoutingModule } from './faq-routing.module';
import { FAQComponent } from './faq.component';
import { PaginatedTableStructureModule } from '../../../shared/feature-modules/paginated-table-structure/paginated-table-structure.module'

//import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        FAQRoutingModule,
        PaginatedTableStructureModule
        //FormsModule
        // HttpModule,
    ],
    providers: [ ],
    declarations: [FAQComponent]
    
})
export class FAQModule {
}
