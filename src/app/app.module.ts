import { HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileNavbarComponent } from './layout/mobile-navbar/mobile-navbar.component';
import { LocationComponent } from './components/location/location.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { PracticeAreasComponent } from './components/practice-areas/practice-areas.component';
import { PracticeComponent } from './components/practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PracticeComponent,
    FooterComponent,
    MobileNavbarComponent,
    LocationComponent,
    AboutmeComponent,
    PracticeAreasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
