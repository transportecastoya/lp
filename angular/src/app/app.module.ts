import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkBioComponent } from './pages/link-bio/link-bio.component';
import { ButtonLinkComponent } from './shared/button-link/button-link.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkBioComponent,
    ButtonLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
