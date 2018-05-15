export class Event {
  constructor(
    public turma: number,
    public curso: string,
    public sala: number,
    public turno: string,
    public instrutor: string,
    public dataInicial: Date,
    public dataFinal: Date,
    public nroAlunos: number,
    public situacao: string,
    public tq: boolean,
    public sqs: boolean,
  ) { }
}
