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
//import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from 'ngx-bootstrap/modal';
import { CadastroCursosComponent } from './cadastro-cursos/cadastro-cursos.component';
import { CadastroInstrutorComponent } from './cadastro-instrutor/cadastro-instrutor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventListComponent,
    EventViewerComponent,
    EventDetailComponent,
    EventCardComponent,
    CamelcasePipe,
    CadastroCursosComponent,
    CadastroInstrutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  entryComponents: [EventDetailComponent], // sem isso buga o modal. vai entender
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
