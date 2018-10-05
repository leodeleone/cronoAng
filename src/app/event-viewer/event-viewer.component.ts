import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-event-viewer',
  templateUrl: './event-viewer.component.html',
  styleUrls: ['./event-viewer.component.scss']
})
export class EventViewerComponent implements OnInit {
  public turnos: any[] = [
    { name: 'Manhã', slug: 'manha' },
    { name: 'Tarde', slug: 'tarde' },
    { name: 'Noite', slug: 'noite' }
  ];
  public selectedTurno: string = 'noite';
  
  constructor(private app: AppComponent) { }

  ngOnInit() {
  }

  onSelectTurno(turnoSlug: string): void {
    this.selectedTurno = turnoSlug;
  }

}
