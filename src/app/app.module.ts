import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { HomeComponent } from './components/home/home.component';
import { EditaParticipanteComponent } from './components/participantes/editaParticipante/editaParticipante.component';
import { EditaTurmaComponent } from './components/turmas/editaTurma/editaTurma.component';
import { CheckHoveringDirective } from './shared/directives/check-hovering.directive';
import { TurmasComponent } from './components/turmas/turmas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './shared/components/message/message.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { ListaTurmaComponent } from './components/turmas/lista-turma/lista-turma.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    HomeComponent,
    EditaParticipanteComponent,
    EditaTurmaComponent,
    CheckHoveringDirective,
    TurmasComponent,
    MessageComponent,
    ToastComponent,
    NavbarComponent,
    FooterComponent,
    ListaTurmaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbToastModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent],
})
export class AppModule { }
