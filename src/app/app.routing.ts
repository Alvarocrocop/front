import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from 'src/app/components/customer-Api/customers/customer/customer.component';
import { CustomerViewComponent } from './components/customer-Api/customers/customer-view/customer-view.component';
import { EconomicComponent } from './components/customer-Api/economic/economic.component';
import { JobComponent } from './components/customer-Api/job/job.component';
import { LegalComponent } from './components/customer-Api/legal/legal.component';
import { ProfessionsComponent } from './components/customer-Api/professions/professions.component';
import { PoliciesComponent } from './components/policies-Api/policies/policies.component';

const appRoutes : Routes = [
    //------ Path comunes ------- 
    {path:'home', component:HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'**', component: HomeComponent},
    //------- Paths relacionados a Customers Api ----- 
    {path: 'customers', component: CustomerComponent},
    {path: 'customers/:id', component: CustomerViewComponent},
    {path: 'economic', component: EconomicComponent},
    {path: 'job', component: JobComponent},
    {path: 'legal', component: LegalComponent},
    {path: 'professions', component: ProfessionsComponent},
    //---- Paths relacionados a Policies Api---------
    {path: 'policies', component: PoliciesComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);