import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductcatalogueComponent } from './productcatalogue/productcatalogue.component';
import { NopageavailableComponent } from './nopageavailable/nopageavailable.component';

export const router: Routes = [
    { path: '', redirectTo: 'Telstra', pathMatch: 'full' },
    { path: 'Telstra', component: NopageavailableComponent },
    { path: 'Personal', component: NopageavailableComponent },
    { path: 'smallbusiness', component: ProductcatalogueComponent },
    { path: 'businessEnterprise', component: NopageavailableComponent },
    { path: 'health', component: NopageavailableComponent },
    { path: 'sportEntertainment', component: NopageavailableComponent },
    {path: '**', component: NopageavailableComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);