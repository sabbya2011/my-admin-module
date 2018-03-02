import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetailerRoutingModule } from './retailer-routing.module';
import { RetailerComponent } from './retailer.component';
import { PaginatedTableStructureModule } from '../../../shared/feature-modules/paginated-table-structure/paginated-table-structure.module'


@NgModule({
    imports: [
        CommonModule,
        RetailerRoutingModule,
        PaginatedTableStructureModule
        // HttpModule,
    ],
    providers: [ ],
    declarations: [RetailerComponent]
})
export class RetailerModule {
}
