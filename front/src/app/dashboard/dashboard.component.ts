import { ListaDeUsuarios } from './ListaDeUsuarios';
import { DashboardService } from './dashboard.service';

import { Component, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GeradorRelatorioService } from '../services/gerador-relatorio.service';
import { LocalStorageServiceService } from '../services/local-storage-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public showMenuEmmiter = new EventEmitter<boolean>();
  public URL = 'auth';

  public users: ListaDeUsuarios[] = [];

  constructor(
    private dashboardService: DashboardService,

    private geradorRelatorioService: GeradorRelatorioService,
    private localStorage: LocalStorageServiceService
  ) {}

  ngOnInit(): void {
    this.showMenuEmmiter.emit(true);
    let localData = this.localStorage.get('coleta');
    this.users = this.dashboardService.getUsers();
  }

  list() {}

  download(id: number) {
    this.geradorRelatorioService.criarExcel(id);
  }
}
