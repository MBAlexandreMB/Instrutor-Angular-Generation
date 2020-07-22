import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { HomeComponent } from './components/home/home.component';
import { EditaParticipanteComponent } from './components/edita-participante/edita-participante.component';
import { EditaTurmaComponent } from './components/edita-turma/edita-turma.component';
import { HomeLogoComponent } from './shared/components/home-logo/home-logo.component';
import { CheckHoveringDirective } from './shared/directives/check-hovering.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    HomeComponent,
    EditaParticipanteComponent,
    EditaTurmaComponent,
    HomeLogoComponent,
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
