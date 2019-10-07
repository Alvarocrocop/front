import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customer-Api/customers/customer/customer.component';
import { EconomicComponent } from './components/customer-Api/economic/economic.component';
import { JobComponent } from './components/customer-Api/job/job.component';
import { LegalComponent } from './components/customer-Api/legal/legal.component';
import { ProfessionsComponent } from './components/customer-Api/professions/professions.component';
import { SearchFormComponent } from './components/customer-Api/customers/search-form/search-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerViewComponent } from './components/customer-Api/customers/customer-view/customer-view.component';
import { PoliciesComponent } from './components/policies-Api/policies/policies.component';
import { PoliciesSearchFormComponent } from './components/policies-Api/policies-search-form/policies-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CustomerComponent,
    EconomicComponent,
    JobComponent,
    LegalComponent,
    ProfessionsComponent,
    SearchFormComponent,
    JwPaginationComponent,
    NavbarComponent,
    CustomerViewComponent,
    PoliciesComponent,
    PoliciesSearchFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
