import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LandingPageComponent } from '../modules/landing-page/landing-page.component';


const appRoutes: Routes = [
  {path: 'landing-page', component: LandingPageComponent}
    
  ];
  
  

    @NgModule({
        
        declarations: [],
        imports: [
            RouterModule.forRoot(appRoutes)
        ],

        exports: [],
        providers: []

    })
    export class Approute {}