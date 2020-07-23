import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

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
    CheckHoveringDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
