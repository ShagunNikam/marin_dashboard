import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSectionComponent } from './Components/left-section/left-section.component';
import { RightSectionComponent } from './Components/right-section/right-section.component';
import { SidebarComponent } from './Components/left-section/sidebar/sidebar.component';
import { HomeComponent } from './Components/right-section/home/home.component';
import { HeaderComponent } from './Components/right-section/header/header.component';
import { FooterComponent } from './Components/right-section/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LeftSectionComponent,
    RightSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
