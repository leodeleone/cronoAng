import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-event-viewer',
  templateUrl: './event-viewer.component.html',
  styleUrls: ['./event-viewer.component.scss']
})
export class EventViewerComponent implements OnInit {
  
  constructor(private app: AppComponent) { }

  ngOnInit() {
  }

}
