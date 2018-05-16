import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  public event: Event;

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  public tryToSave() {
    console.log('informações salvas! (zoa)');
    this.modalRef.hide();
  }

}
