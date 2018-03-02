import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatagoryRoutingModule } from './product-catagory-routing.module';
import { ProductCatagoryComponent } from './product-catagory.component';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        ProductCatagoryRoutingModule
        // HttpModule,
    ],
    providers: [ ],
    declarations: [ProductCatagoryComponent]
})
export class ProductCatagoryModule {
}
