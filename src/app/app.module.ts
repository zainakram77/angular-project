import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './AppModules/mat.module';
import { Approute } from './AppModules/approute.module';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { HeaderComponent } from './modules/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    Approute,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
