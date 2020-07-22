import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { HomeComponent } from './components/home/home.component';
import { EditaParticipanteComponent } from './components/edita-participante/edita-participante.component';
import { EditaTurmaComponent } from './components/edita-turma/edita-turma.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    HomeComponent,
    EditaParticipanteComponent,
    EditaTurmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
