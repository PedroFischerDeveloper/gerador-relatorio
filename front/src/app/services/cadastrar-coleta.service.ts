import { EventEmitter, Injectable } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service.service';

@Injectable({
  providedIn: 'root',
})
export class CadastrarColetaService {
  public fila = 0;

  constructor(private localStorage: LocalStorageServiceService) {}

  prepararUpload(data: any) {
    this.fila++;
    this.localStorage.set(`coleta${this.fila}`, data);
  }
}
