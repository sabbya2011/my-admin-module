import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PagedTableViewComponent } from './paged-table-view/paged-table-view.component';
import { PaginationFooterComponent } from './pagination-footer/pagination-footer.component';
import { SelectionContainerComponent } from './selection-container/selection-container.component';
import { PaginationEntityUpdatorComponent } from './pagination-entity-updator/pagination-entity-updator.component';
import { AlertWindowContainerComponent } from './alert-window/alert-window-container.component';
import{ PaginatedTableStructureComponent } from './paginated-table-structure.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
        // HttpModule,
    ],
    providers: [ ],
    declarations: [
        PaginatedTableStructureComponent,
        PagedTableViewComponent, 
        PaginationFooterComponent, 
        SelectionContainerComponent, 
        AlertWindowContainerComponent,
        PaginationEntityUpdatorComponent
    ],
    exports:[
        PaginatedTableStructureComponent,
        PagedTableViewComponent, 
        PaginationFooterComponent, 
        SelectionContainerComponent, 
        PaginationEntityUpdatorComponent
    ]
    
})
export class PaginatedTableStructureModule {
}
