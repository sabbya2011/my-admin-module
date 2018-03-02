import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCatagoryComponent } from './product-catagory.component';

const routes: Routes = [
    { path: '', component: ProductCatagoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCatagoryRoutingModule { }
