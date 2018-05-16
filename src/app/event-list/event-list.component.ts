import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';
import { Event } from '../event';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  providers: [BackendApiService]
})
export class EventListComponent implements OnInit {
  public events: Event[];
  public selectedEvent: Event;
  public modalRef: BsModalRef;

  constructor(private apiData: BackendApiService, private modalService: BsModalService) {}

  ngOnInit() {
    this.getEvents();
  }

  public getEvents(): void {
    this.apiData.getEvents().subscribe(data => (this.events = data));
  }

  public onSelect(event: Event): void {
    this.selectedEvent = event;
    const initialState = {
      event: event
    };
    this.modalRef = this.modalService.show(EventDetailComponent, { initialState });
  }
}
