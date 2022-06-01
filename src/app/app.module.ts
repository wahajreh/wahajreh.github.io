import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavberComponent } from './navber/navber.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SecMainComponent } from './sec-main/sec-main.component';
import { FAQComponent } from './faq/faq.component';
import { NextGaqComponent } from './next-gaq/next-gaq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    FooterComponent,
    MainComponent,
    SecMainComponent,
    FAQComponent,
    NextGaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
