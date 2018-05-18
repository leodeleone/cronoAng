import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';
import { Curso } from './curso';
import { Instrutor } from './instrutor';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private eventsUrl = 'assets/test.json';
  private cursosUrl = 'assets/cursos.json';
  private instrutoresUrl = 'assets/instrutores.json';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    //return of(EVENTS);
    return this.http.get<Event[]>(this.eventsUrl);
  }

  getCursos(): Observable<Curso[]> {
    //return of(CURSOS);
    return this.http.get<Curso[]>(this.cursosUrl);
  }

  getInstrutores(): Observable<Instrutor[]> {
    //return of(INSTRUTORES);
    return this.http.get<Instrutor[]>(this.instrutoresUrl);
  }

}
