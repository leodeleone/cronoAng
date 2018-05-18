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
    //setTimeout(() => this.onSelect(this.events[0]), 500);
  }

  public getEvents(): void {
    this.apiData.getEvents().subscribe(data => {
      data.forEach( e => {
        e.sala = parseInt(e.sala.toString());
      });
      this.events = data;
    });
  }

  public onSelect(event: Event): void {
    this.selectedEvent = event;
    const initialState = {
      event: event
    };
    this.modalRef = this.modalService.show(EventDetailComponent, { initialState, class: 'modal-lg' });
    this.modalService.onHide.subscribe(() => this.selectedEvent = null);
  }
}
