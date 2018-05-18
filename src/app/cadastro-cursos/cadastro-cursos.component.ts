import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-cadastro-cursos',
  templateUrl: './cadastro-cursos.component.html',
  styleUrls: ['./cadastro-cursos.component.scss']
})
export class CadastroCursosComponent implements OnInit {
  public cursos: Curso[];

  constructor(private apiData: BackendApiService) { }

  ngOnInit() {
    this.getCursos();
  }

  public getCursos(): void {
    this.apiData.getCursos().subscribe(data => this.cursos = data);
  }

  public deleteCurso(id): void {
    const idx = this.cursos.findIndex(e => e.id == id);
    this.cursos.splice(idx, 1);
  }

}
