import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventViewerComponent } from './event-viewer/event-viewer.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCardComponent } from './event-card/event-card.component';
import { CamelcasePipe } from './camelcase.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventListComponent,
    EventViewerComponent,
    EventDetailComponent,
    EventCardComponent,
    CamelcasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
