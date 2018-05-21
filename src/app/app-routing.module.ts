import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventViewerComponent } from './event-viewer/event-viewer.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CadastroCursosComponent } from './cadastro-cursos/cadastro-cursos.component';
import { CadastroInstrutorComponent } from './cadastro-instrutor/cadastro-instrutor.component';

const routes: Routes = [
  { path:'', redirectTo: 'view', pathMatch: 'full' },  // home page
  { path:'view', component: EventViewerComponent  },
  //{ path:'edit', component: CronoEditComponent },
  { path:'lista', component: EventListComponent },
  { path:'cursos', component: CadastroCursosComponent },
  { path:'instrutores', component: CadastroInstrutorComponent },
  //{ path:'event/:id', component: EventDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
