import { Participante } from './participante.model';

export class Turma {
  constructor(
    public id: number,
    public descricao: String,
    public tipo: String,
    public participantes: Participante[],
  ) {}
}