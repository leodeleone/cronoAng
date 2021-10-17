import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from "../app.component";
import { Event } from "../event";

@Component({
  selector: 'app-calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss']
})
export class CalendarGridComponent implements OnInit {
  @Input() turno: string;
  public salas;

  constructor(private app: AppComponent) {
    this.salas = app.salas;
  }

  ngOnInit() {
    //setTimeout( ()=>console.log(this.app.events), 1000);
  }

  checkCell(i: number, sala: string, turno: string) {
    let filtered = this.app.events.filter( ev => {
      return this.app.testEventDate(ev, this.app.weekDates[i])
          && this.app.testEventSala(ev, sala)
          && this.app.testEventTurno(ev, turno);
    }, this);
    return filtered.length == 1 ? filtered[0].curso : '-';
  }
}
