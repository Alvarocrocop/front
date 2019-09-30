import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomerViewComponent } from './components/customers/customer-view/customer-view.component';
import { EconomicComponent } from './components/economic/economic.component';
import { JobComponent } from './components/job/job.component';
import { LegalComponent } from './components/legal/legal.component';
import { ProfessionsComponent } from './components/professions/professions.component';
import { ListCustomersComponent } from './components/customers/list-customers/list-customers.component';
const appRoutes : Routes = [
    {path:'home', component:HomeComponent},
    {path:'login', component: LoginComponent},
    {path: 'customers', component: CustomerComponent},
    {path: 'customers/:id', component: CustomerViewComponent},
    {path: 'economic', component: EconomicComponent},
    {path: 'job', component: JobComponent},
    {path: 'list', component : ListCustomersComponent},
    {path: 'legal', component: LegalComponent},
    {path: 'professions', component: ProfessionsComponent},
    {path:'**', component: LoginComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);