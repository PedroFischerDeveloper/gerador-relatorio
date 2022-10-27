import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css'],
})
export class FormCadastroComponent implements OnInit {
  public form!: FormGroup;
  public URL = 'auth';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
    });
  }

  get nome() {
    return this.form.get('nome')!;
  }

  get cpf() {
    return this.form.get('cpf')!;
  }

  get email() {
    return this.form.get('email')!;
  }

  get senha() {
    return this.form.get('senha')!;
  }

  onSubmit() {
    console.log(this.form.value);

    return false;
    this.apiService.register(this.URL, this.form.value);
  }
}
