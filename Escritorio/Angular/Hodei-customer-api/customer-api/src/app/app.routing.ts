import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EconomicComponent } from './components/economic/economic.component';
import { JobComponent } from './components/job/job.component';
import { LegalComponent } from './components/legal/legal.component';
import { ProfessionsComponent } from './components/professions/professions.component';
const appRoutes : Routes = [
    {path:'home', component:HomeComponent},
    {path:'login', component: LoginComponent},
    {path: 'customer', component: CustomerComponent},
    {path: 'economic', component: EconomicComponent},
    {path: 'job', component: JobComponent},
    {path: 'legal', component: LegalComponent},
    {path: 'professions', component: ProfessionsComponent},
    {path:'**', component: LoginComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);