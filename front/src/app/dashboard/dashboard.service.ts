import { HttpClient } from '@angular/common/http';
import { LocalStorageServiceService } from './../services/local-storage-service.service';
import { Injectable } from '@angular/core';
import { ListaDeUsuarios } from './model/ListaDeUsuarios';
import { environment } from '../../environments/environment';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  [x: string]: any;
  private API_URL = environment.API_URL;
  public users: any;
  public handleError: any;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageServiceService
  ) {}

  async getUsers() {
    return this.http.get(`${this.API_URL}/usuario`);
  }
}
