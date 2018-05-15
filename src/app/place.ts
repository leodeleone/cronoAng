export class Place {
  constructor(
    public numero: number,
    public name: string,
    public slug: string,
  ) { }
};

export const SALAS: Place[] = [
  new Place(1,'Sala 1','sala1'),
  new Place(2,'Sala 2','sala2'),
  new Place(3,'Sala 3','sala3'),
  new Place(4,'Sala 4','sala4'),
  new Place(5,'Sala 5','sala5'),
  new Place(6,'Sala 6','sala6')
];