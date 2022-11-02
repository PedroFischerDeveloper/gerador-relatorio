import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GeradorRelatorioService } from 'src/app/services/gerador-relatorio.service';
import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public showMenuEmmiter = new EventEmitter<boolean>();

  public showMenu: boolean = false;

  constructor(
    private router: Router,
    private isAuth: AuthService,
    private auth: AuthService,
    private localStorage: LocalStorageServiceService,
    private geradorRelatorioService: GeradorRelatorioService
  ) {}

  ngOnInit(): void {}

  sendToServer() {
    let localData = this.localStorage.get('coleta');

    localData.forEach((element: any) => {
      console.log(element);
    });
  }

  navTo(navTo: string, showMenu: boolean) {
    this.showMenuEmmiter.emit(showMenu);
    this.router.navigateByUrl(navTo);
  }

  download() {
    console.log('teste');
    this.geradorRelatorioService.gerarExcel();
  }
}
