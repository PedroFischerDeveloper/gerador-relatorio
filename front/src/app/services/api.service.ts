import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URL: string = 'http://localhost:8081/api/';

  constructor() {}

  auth(uri: string, data: any) {}

  register(uri: string, data: any) {}

  get(uri: string) {}

  getId(uri: string, id: number) {}

  edit(uri: string, id: number) {}

  delete(uri: string, id: number) {}
}
