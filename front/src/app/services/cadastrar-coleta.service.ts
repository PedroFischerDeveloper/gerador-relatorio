import { EventEmitter, Injectable } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service.service';

@Injectable({
  providedIn: 'root',
})
export class CadastrarColetaService {
  public contagem = 0;
  public fila = [{}];

  constructor(private localStorage: LocalStorageServiceService) {}

  prepararUpload(data: any) {
    this.contagem++;
    this.localStorage.set('coleta', data);
    console.log(this.localStorage.get('coleta'));
  }
}
