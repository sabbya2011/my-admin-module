import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
        // HttpModule,
    ],
    providers: [ ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
