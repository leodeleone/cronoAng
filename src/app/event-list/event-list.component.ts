import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  providers: [BackendApiService]
})
export class EventListComponent implements OnInit {
  public events: Event[];

  constructor(private apiData: BackendApiService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.apiData.getEvents().subscribe(data => this.events = data);
  }

}
