export class Event {
  constructor(
    public id: number,
    public curso: string,
    public sala: number,
    public turno: string,
    public instrutor: string,
    public dataInicial: Date,
    public dataFinal: Date,
    public situacao: string,
  ) { }
}
