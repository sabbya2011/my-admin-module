import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: AppLayoutComponent ,
    children :[
      { 
        path: '', 
        redirectTo: 'dashboard',
        pathMatch:'full'
      },
      { 
        path: 'dashboard', 
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      { 
        path: 'region', 
        loadChildren: './management-modules/region/region.module#RegionModule'
      },
      { 
        path: 'product-catagory', 
        loadChildren: './authoring-modules/product-catagory/product-catagory.module#ProductCatagoryModule'
      },
      { 
        path: 'retailer', 
        loadChildren: './authoring-modules/retailer/retailer.module#RetailerModule'
      },
      { 
        path: 'faq', 
        loadChildren: './authoring-modules/faq/faq.module#FAQModule'
      }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
