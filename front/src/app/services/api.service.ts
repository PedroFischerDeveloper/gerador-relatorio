import { Agente } from './../shared/models/Agente.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = environment.baseURL;
  private apiURL = `${this.baseURL}api/`;

  constructor(private http: HttpClient) {}

  auth(uri: string, data: any) {}

  register(uri: string, data: Agente) {
    console.log(data);
    return this.http.post<Agente>(this.apiURL + uri, data);
  }

  get(uri: string) {}

  getId(uri: string, id: number) {}

  edit(uri: string, id: number) {}

  delete(uri: string, id: number) {}
}
