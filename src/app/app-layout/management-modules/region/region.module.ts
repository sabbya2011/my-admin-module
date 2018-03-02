import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        RegionRoutingModule
        // HttpModule,
    ],
    providers: [ ],
    declarations: [RegionComponent]
})
export class RegionModule {
}
