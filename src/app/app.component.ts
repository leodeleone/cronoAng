import { Component } from '@angular/core';
import { Event } from "./event";
import { BackendApiService } from './backend-api.service';

export const DAY_IN_MSEC = 1000 * 60 * 60 * 24;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'app';
  public diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  public salas = [
    { name: 'Sala 1', slug: 'sala1' },
    { name: 'Sala 2', slug: 'sala2' },
    { name: 'Sala 3', slug: 'sala3' },
    { name: 'Sala 4', slug: 'sala4' },
    { name: 'Sala 5', slug: 'sala5' },
    { name: 'Sala 6', slug: 'sala6' }
  ];
  public today: Date;
  public dom0: Date; // primeiro domingo antes de hoje
  public dom1: Date; // primeiro domingo após hoje
  public weekPad: number; // semana relativa à atual

  public events: Event[];
  public weekDates: Date[];

  constructor(private apiData: BackendApiService) {
    this.today = new Date('2018-01-15');
    this.today.setHours(0);
    this.today.setMinutes(0);
    this.today.setSeconds(0);
    this.today.setMilliseconds(0);
    this.dom0 = this.returnDate(this.today, -this.today.getDay());
    this.dom1 = this.returnDate(this.today, 7 - this.today.getDay());
    this.weekPad = 0;
    this.weekDates = [];
    this.events = [];
  }
  ngOnInit() {
    this.getEvents();
    this.updateDates();
  }

  getEvents(): void {
    this.apiData.getEvents().subscribe(data => {
      data.forEach( e => {
        e.sala = parseInt(e.sala.toString());
      });
      this.events = data
    });
  }

  waitForElement(selector, callback, timeLimit) {
    if (
      typeof selector === 'string' &&
      typeof callback === 'function' &&
      typeof timeLimit === 'number'
    ) {
      (function(selector, callback, timeLimit) {
        timeLimit = timeLimit || 10000;
        function isReady() {
          return document.querySelectorAll(selector).length > 0;
        }
        var interval = setInterval(function() {
          if (isReady()) {
            clearInterval(interval);
            clearTimeout(timeout);
            callback();
          }
        }, 100);
        var timeout = setTimeout(function() {
          clearInterval(interval);
          clearTimeout(timeout);
        }, timeLimit);
      })(selector, callback, timeLimit);
    }
  }

  zeroLeftPad(num: number, size: number): string {
    // Xforma um numero em string preenchendo com 0 no início.
    // Ex.: zeroLeftPad(3,4) = "0003"
    let str: string = num.toString();
    while (str.length < size) str = '0' + str;
    return str;
  }
  returnDate(date_0: Date, days: number): Date {
    // Retorna a data resultante da data inicial + dias. Aceita dias negativos.
    // Ex.: returnDate('02/06/2017', 10) = '12/06/2017'
    let new_date: Date = new Date();
    new_date.setTime(date_0.getTime() + days * DAY_IN_MSEC);
    return new_date;
  }
  compareDate(date_0: Date, date_1: Date): number {
    // Compara duas datas, retornando a diferença entre as duas (d0-d1)
    return date_0.getTime() - date_1.getTime();
  }
  updateDates(): void {
    this.weekDates = [];
    for (let i = 0; i < 7; i++) {
      this.weekDates.push(this.returnDate(this.dom0, i));
    }
    console.log(this.weekDates);
  }

  testEventDate(turma: Event, date: Date): boolean { // testa se uma turma ocorre numa data
    return (new Date(turma.dataInicial) <= date) && (new Date(turma.dataFinal) >= date);
  }
  testEventSala(turma: Event, sala: any): boolean { // testa se uma turma ocorre numa sala
    return (turma.sala == sala.replace(/\D*/g, ''));
  }
  testEventTurno(turma: Event, turno: string): boolean { // testa se uma turma ocorre num turno
    let pattern: RegExp = new RegExp(turno+"\\b", "gi");
    return pattern.test(turma.turno);
  }

}
