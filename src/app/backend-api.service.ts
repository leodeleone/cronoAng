import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private eventsUrl = 'assets/test.json';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    //return of(EVENTS);
    return this.http.get<Event[]>(this.eventsUrl);
  }

}
