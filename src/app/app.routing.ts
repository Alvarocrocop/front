import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customer-Api/customers/customer/customer.component';
import { EconomicComponent } from './components/customer-Api/economic/economic.component';
import { JobComponent } from './components/customer-Api/job/job.component';
import { LegalComponent } from './components/customer-Api/legal/legal.component';
import { ProfessionsComponent } from './components/customer-Api/professions/professions.component';
import { PoliciesComponent } from './components/policies-Api/policies/policies.component';
import { CustomerViewComponent } from './components/customer-Api/customers/customer-view/customer-view.component';
import { PoliciesViewDetailComponent } from './components/policies-Api/policies-view-detail/policies-view-detail.component';



const appRoutes : Routes = [
    { path: 'home' , component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'customers', component: CustomerComponent},
    { path: 'customers/:id', component: CustomerViewComponent},
    { path: 'economic', component: EconomicComponent},
    { path: 'job', component: JobComponent},
    { path: 'legal', component: LegalComponent},
    { path: 'professions', component: ProfessionsComponent},
    { path: 'policies', component:PoliciesComponent},
    { path: 'policies/:id' , component:PoliciesViewDetailComponent},
    { path: '**' , component: HomeComponent} 
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
