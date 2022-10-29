import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ListUser } from '../shared/models/ListUser.model';
import { AuthService } from '../services/auth.service';
import { GeradorRelatorioService } from '../services/gerador-relatorio.service';
import { Agente } from '../shared/models/Agente.model';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public URL = 'auth';
  public listAgente: Array<Agente> = [];

  public users: ListUser[] = [
    { nome: 'Pedro', funcao: 'agente' },
    { nome: 'João', funcao: 'agente' },
    { nome: 'Luiz', funcao: 'agente' },
    { nome: 'Marcos', funcao: 'agente' },
    { nome: 'Pedro', funcao: 'agente' },
    { nome: 'João', funcao: 'agente' },
    { nome: 'Luiz', funcao: 'agente' },
    { nome: 'Marcos', funcao: 'agente' },
    { nome: 'Pedro', funcao: 'agente' },
    { nome: 'João', funcao: 'agente' },
    { nome: 'Luiz', funcao: 'agente' },
    { nome: 'Marcos', funcao: 'agente' },
    { nome: 'Pedro', funcao: 'agente' },
    { nome: 'João', funcao: 'agente' },
    { nome: 'Luiz', funcao: 'agente' },
    { nome: 'Marcos', funcao: 'agente' },
  ];

  constructor(
    private apiService: ApiService,
    private isAuth: AuthService,
    private geradorRelatorioService: GeradorRelatorioService
  ) {
    this.listAgente = this.geradorRelatorioService.list();
  }

  ngOnInit(): void {}

  list() {}

  download(agente: Agente) {
    this.geradorRelatorioService.criarExcel(agente);
  }

  edit(id: number) {
    this.apiService.edit(this.URL, id);
  }

  delete(id: number) {
    this.apiService.delete(this.URL, id);
  }
}
