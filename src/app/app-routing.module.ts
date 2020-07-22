import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EditaParticipanteComponent } from './components/edita-participante/edita-participante.component';
import { EditaTurmaComponent } from './components/edita-turma/edita-turma.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'participantes', component: ParticipantesComponent },
  { path: 'participante/:id/:modo', component: EditaParticipanteComponent },
  { path: 'turma/:id/:modo', component: EditaTurmaComponent },
  { path: '**', redirectTo:'/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
