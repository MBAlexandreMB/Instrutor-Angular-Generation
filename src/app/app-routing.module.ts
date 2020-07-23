import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EditaParticipanteComponent } from './components/editaParticipante/editaParticipante.component';
import { TurmasComponent } from './components/turmas/turmas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'participantes', component: ParticipantesComponent },
  { path: 'participante/:id/:modo', component: EditaParticipanteComponent },
  { path: 'turma/:id/:modo', component: TurmasComponent },
  { path: '**', redirectTo:'/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
