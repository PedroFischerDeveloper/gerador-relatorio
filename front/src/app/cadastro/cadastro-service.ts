import { Injectable } from '@angular/core';
import { LocalStorageServiceService } from '../services/local-storage-service.service';
import { ToastService } from '../services/toast.service';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  protected fila: Usuario[] = [];
  private id: number = 0;

  constructor(private localStorage: LocalStorageServiceService) {}

  validarSenha(senha: string, confirmaSenha: string) {
    if (senha === confirmaSenha) {
      return false;
    }

    return true;
  }

  saveOffLine(data: Usuario) {
    let isValid = this.isEqualObject(this.fila, data);

    if (isValid === 1) {
      return false;
    }

    this.fila.push(data);

    if (!this.localStorage.get('usuarios')) {
      this.localStorage.set('usuarios', this.fila);
      return true;
    }
    const localStorageData = this.localStorage.get('usuarios');

    if (this.isEqualObject(localStorageData, data) === -1) {
      this.fila.push(data);
      this.localStorage.set('usuarios', this.fila);
      return true;
    }
    return false;
  }

  isEqualObject(array: any, data: Usuario) {
    return array.findIndex(
      (item: any) => item.email === data.email || item.cpf === data.cpf
    );
  }
}
