import { Turma } from './turma.model';

export class Participante {
  constructor(
    public id: number,
    public nome: String,
    public email: String,
    public observacoes: String,
    public turma: Turma | number,
  ) {}
}