import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { EconomicComponent } from './components/economic/economic.component';
import { JobComponent } from './components/job/job.component';
import { LegalComponent } from './components/legal/legal.component';
import { ProfessionsComponent } from './components/professions/professions.component';
import { SearchFormComponent } from './components/customers/search-form/search-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerViewComponent } from './components/customers/customer-view/customer-view.component';

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
