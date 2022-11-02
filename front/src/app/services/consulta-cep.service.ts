import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaCepService {
  public data = [];

  constructor(private http: HttpClient) {}

  consultaCep(cep: string): any {
    var cep = cep.replace(/\D/g, '');

    if (cep != '') {
      return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
    }
  }
}
