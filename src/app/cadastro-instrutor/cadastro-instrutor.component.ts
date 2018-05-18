import { Component, OnInit } from '@angular/core';
import { Instrutor } from '../instrutor';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-cadastro-instrutor',
  templateUrl: './cadastro-instrutor.component.html',
  styleUrls: ['./cadastro-instrutor.component.scss']
})
export class CadastroInstrutorComponent implements OnInit {
  public instrutores: Instrutor[];

  constructor(private apiData: BackendApiService) { }

  ngOnInit() {
    this.getInstrutores();
  }

  public getInstrutores(): void {
    this.apiData.getInstrutores().subscribe(data => this.instrutores = data);
  }

  public deleteInstrutor(id): void {
    const idx = this.instrutores.findIndex(e => e.id == id);
    this.instrutores.splice(idx, 1);
  }
}
