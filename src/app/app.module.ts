import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { HomeComponent } from './components/home/home.component';
import { EditaParticipanteComponent } from './components/editaParticipante/editaParticipante.component';
import { EditaTurmaComponent } from './components/editaTurma/editaTurma.component';
import { CheckHoveringDirective } from './shared/directives/check-hovering.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    HomeComponent,
    EditaParticipanteComponent,
    EditaTurmaComponent,
    CheckHoveringDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
