import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
        // HttpModule,
    ],
    providers: [ ],
    declarations: [DashboardComponent]
})
export class DashboardModule {
}
