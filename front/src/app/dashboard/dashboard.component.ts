import { ListaDeUsuarios } from './model/ListaDeUsuarios';
import { DashboardService } from './dashboard.service';

import { Component, EventEmitter, OnInit } from '@angular/core';
import { GeradorRelatorioService } from '../services/gerador-relatorio.service';
import { LocalStorageServiceService } from '../services/local-storage-service.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public showMenuEmmiter = new EventEmitter<boolean>();
  public URL = 'auth';

  public users: any;
  public userAuthenticated: any;
  public showMenu: boolean = false;

  constructor(
    private dashboardService: DashboardService,
    private geradorRelatorioService: GeradorRelatorioService,
    private route: ActivatedRoute
  ) {
    console.log(true);
    this.showMenuEmmiter.emit(true);
  }

  async ngOnInit(): Promise<void> {
    let id = 4;

    // this.route.queryParams.subscribe((res) => {
    //   id = JSON.parse(res['id']);
    // });

    // (await this.dashboardService.getUsers()).subscribe((res: any) => {
    //   this.users = res;
    // });
  }

  list() {}

  download(id: number) {
    this.geradorRelatorioService.criarExcel(id);
  }
}
