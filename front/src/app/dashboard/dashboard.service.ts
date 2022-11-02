import { HttpClient } from '@angular/common/http';
import { LocalStorageServiceService } from './../services/local-storage-service.service';
import { Injectable } from '@angular/core';
import { ListaDeUsuarios } from './ListaDeUsuarios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private API_URL = environment.API_URL;
  public users: ListaDeUsuarios[] = [];

  constructor(
    private localStorageServiceService: LocalStorageServiceService,
    private httpClient: HttpClient
  ) {
    if (this.localStorageServiceService.get('usuarios')) {
      const users = this.localStorageServiceService.get('usuarios');

      this.users = users;
    } else {
      const user = new ListaDeUsuarios();
      const user2 = new ListaDeUsuarios();
      const user3 = new ListaDeUsuarios();

      user.id = 1;
      user.nome = 'Pedro Fischer';
      user.funcao = 'Agente';

      user2.id = 2;
      user2.nome = 'Marcos';
      user2.funcao = 'Agente';

      user3.id = 3;
      user3.nome = 'Luiz';
      user3.funcao = 'Estagiário';

      this.users.push(user);
      this.users.push(user2);
      this.users.push(user3);
    }
  }

  getUsers() {
    console.log(this.users);
    console.log(this.API_URL);
    this.httpClient.get(`${this.API_URL}/usuario`).subscribe((res) => {
      console.log(res);
    });

    return this.users;
  }
}
