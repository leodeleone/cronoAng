import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss']
})
export class CalendarGridComponent implements OnInit {
  @Input() turno: string;

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    //console.log(this.app);
  }

}
