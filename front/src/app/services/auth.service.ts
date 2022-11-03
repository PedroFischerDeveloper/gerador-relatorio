import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authenticated: boolean = false;

  public showMenuEmmiter = new EventEmitter<boolean>();
  public isAdmin = new EventEmitter<boolean>();

  constructor(
    private apiService: ApiService,
    private router: Router,
    private toast: ToastService
  ) {}

  auth(cpf: string, senha: string) {
    console.log(cpf);
    console.log(senha);

    if (cpf == '123' && senha == '123') {
      //chamada login

      //
      this.authenticated = true;
      this.showMenuEmmiter.emit(true);
      this.isAdmin.emit(true);

      this.router.navigate(['/dashboard'], {
        queryParams: { id: JSON.stringify(4) },
      });
    } else {
      this.authenticated = false;
      this.showMenuEmmiter.emit(false);
      this.toast.showMessageError('Ops!', 'CPF ou Senha inválidos!');
    }
  }

  logOff() {
    /*
      limpar cookies e cash
    */
    this.showMenuEmmiter.emit(false);
    this.router.navigateByUrl('');
  }
}
